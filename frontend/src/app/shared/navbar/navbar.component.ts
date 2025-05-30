import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = inject(TokenService).isAuthenticated(); // esto cambia dependiendo de si el usuario está logueado o no
  isAdmin = inject(TokenService).isAdmin(); // esto cambia dependiendo de si el usuario es admin o no
  user: User = {} as User;
  menuOpen = false;
  perfilMenuOpen = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
    this.getUser(); // ← se ejecuta al cargar
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if(!this.menuOpen){
      this.perfilMenuOpen = false;
    }
  }

  togglePerfilMenu() {
    this.perfilMenuOpen = !this.perfilMenuOpen;
  }

  getUser(){
    const user = this.tokenService.getUser();
    if (user) {
      this.user = user;
    }
  }

  logout() {
    // Aquí llamas a tu servicio de logout
    console.log('Cerrando sesión...');
    this.authService.logout().subscribe(
      response => this.handleResponse(response),
      errors => this.handleErrors(errors)
    );
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  private handleResponse(response: any) {
    console.log('Respuesta del servidor:', response.message);
    this.tokenService.revokeToken();
    localStorage.removeItem('user');
    // this.router.navigateByUrl('');
    window.location.href = '/'; // Recarga toda la app desde la raíz
  }

  private handleErrors(errors: any) {
    console.error('Error al cerrar sesión:', errors.error);
  }
}
