const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcypt = require('bcrypt-nodejs');

let emailLengthChecker = (email) => {
    if (!email) {
        return false;
    } else {
        if (email.length < 5 || email.length > 30) {
            return false;
        } else {
            return true;
        }
    }
};

let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
        return regExp.test(email);
    }
};

const emailValidators = [{
    validator: emailLengthChecker,
    message: 'Email must be at least 5 character but no more than 30'
}, {
    validator: validEmailChecker,
    message: 'Must be a valid e-mail'
}];

let usernameLengthChecker = (username) => {
    if (!username) {
        return false;
    } else {
        if (username.length < 5 || username.length > 16) {
            return false;
        } else {
            return true;
        }
    }
};

let validUsernameChecker = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
}
const usernameValidators = [{
    validator: usernameLengthChecker,
    message: 'Username must be at least 5 charaters but no more than 30 characters'
}, {
    validator: validUsernameChecker,
    message: 'Username must not have any special characters'
}];

let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
        if (password.length < 6 || password.length > 30) {
            return false;
        } else {
            return true;
        }
    }
}

const passwordValidators = [{
    validator: passwordLengthChecker,
    message: 'Password must be at least 6 characters but no more than 30 characters'

}];

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: emailValidators
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: usernameValidators
    },
    password: {
        type: String,
        required: true,
        validate: passwordValidators
    }
});


userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next;
    bcypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = (password) => {
    return bcypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);