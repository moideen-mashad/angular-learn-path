import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }
  clickMe(): void {
    alert(`Hi, ${this.loginForm.value.username}`);
  }
  description = '';

  viewDescription(): void {
    this.description = 'Welcome to DecoLux, where we create stunning interior designs for luxury spaces. Our team of talented designers works together to bring your vision to life.';
  }

  getName:any = '';
}
