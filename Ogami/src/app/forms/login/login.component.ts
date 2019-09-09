import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface LoginResponse {
  success: boolean;
  message: string;
  token;
  user;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message;
  messageClass;
  processing: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  createForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ])
      ]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  disableForm() {
    // tslint:disable-next-line:no-string-literal
    this.loginForm.controls['username'].disable();
    this.loginForm.controls.password.disable();
  }

  enableForm() {
    // tslint:disable-next-line:no-string-literal
    this.loginForm.controls['username'].enable();
    this.loginForm.controls.password.enable();
  }
  getErrorUsernameMessage() {
    return this.loginForm.get('username').hasError('required')
      ? 'You have enter a value'
      : this.loginForm.get('username').hasError('minlength')
      ? 'Must be at least 5 characters'
      : this.loginForm.get('username').hasError('maxlength')
      ? 'dasdas'
      : '';
  }

  getErrorPasswordMessage() {
    return this.loginForm.get('password').hasError('required')
      ? 'You have enter a value'
      : this.loginForm.get('password').hasError('minlength')
      ? 'Must be at least 8 characters'
      : this.loginForm.get('password').hasError('maxlength')
      ? 'No more than 20 characters'
      : '';
  }

  onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    this.auth.loginUser(user).subscribe((data: LoginResponse) => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.auth.storageUserData(data.token, data.user);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.createForm();
    this.processing = false;
  }
}
