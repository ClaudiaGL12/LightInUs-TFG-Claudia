import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errors: any;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    this.cleanErrors();
    this.authService.login(this.loginForm.value).subscribe(
      response => this.handleResponse(response),
      errors => this.handleErrors(errors),
    );
  }

  private handleResponse(response: any): void {
    console.log('respuesta del backend: '+response.message + response.token);
    this.tokenService.handleToken(response.token);
    this.router.navigate(['/']);
  }

  private handleErrors(errors: any): void {
    this.errors = errors.error.errors;
    console.log(this.errors);
  }

  private cleanErrors(): void {
    setTimeout(() => {
      this.errors = null;
    }, 4000);
  }
}
