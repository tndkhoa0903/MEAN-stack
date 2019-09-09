import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

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
  ngOnInit() {
    this.createForm();
  }
}
