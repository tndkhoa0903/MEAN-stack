import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  EmailValidator
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  createForm() {
    this.userForm = this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(5),
            Validators.maxLength(30)
          ])
        ],
        username: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15)
          ])
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20)
          ])
        ],
        verifyPassword: ['', Validators.compose([Validators.required])]
      },
      { validators: this.passwordValidator }
    );
  }

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  get email() {
    return this.userForm.get('email');
  }

  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }

  getErrorEmailMessage() {
    return this.userForm.get('email').hasError('required')
      ? 'You have enter a value'
      : this.userForm.get('email').hasError('email')
      ? 'Not a valid email'
      : this.userForm.get('email').hasError('minlength')
      ? 'Must be at least 5 chracters'
      : this.userForm.get('email').hasError('maxlength')
      ? 'No more than 30 characters'
      : '';
  }

  getErrorUsernameMessage() {
    return this.userForm.get('username').hasError('required')
      ? 'You have enter a value'
      : this.userForm.get('username').hasError('minlength')
      ? 'Must be at least 5 characters'
      : this.userForm.get('username').hasError('maxlength')
      ? 'No more than 15 characters'
      : '';
  }

  getErrorPasswordMessage() {
    return this.userForm.get('password').hasError('required')
      ? 'You have enter a value'
      : this.userForm.get('password').hasError('minlength')
      ? 'Must be at least 8 characters'
      : this.userForm.get('password').hasError('maxlength')
      ? 'No more than 20 characters'
      : '';
  }

  getErrorVerifyPasswordMessage() {
    return this.userForm.get('verifyPassword').hasError('required')
      ? 'You have enter a value'
      : this.userForm.hasError('passwordsDoNotMatch')
      ? 'Password do not match'
      : '';
  }
  passwordValidator(form: FormGroup) {
    const condition =
      form.get('password').value !== form.get('verifyPassword').value;

    return condition ? { passwordsDoNotMatch: true } : null;
  }
  ngOnInit() {}
}
