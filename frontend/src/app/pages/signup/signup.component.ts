import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm: FormGroup;
  errors: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
    });
  }

  onSubmit(): void {
    this.cleanErrors();
    this.authService.signup(this.registerForm.value).subscribe(
      response => this.handleResponse(response),
      errors => this.handleErrors(errors),
    );
  }

  private handleResponse(response: any): void {
    this.router.navigateByUrl('/login');
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

  //metodo para agregar la clase auth-layout al body del diseño
  ngOnInit(): void {
    document.body.classList.add('auth-layout');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('auth-layout');
  }
}
