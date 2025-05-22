import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = inject(TokenService).isAuthenticated(); // esto cambia dependiendo de si el usuario está logueado o no
  isAdmin = inject(TokenService).isAdmin(); // esto cambia dependiendo de si el usuario es admin o no
  menuOpen = false;
  perfilMenuOpen = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ){}

  // ngOnInit(){
  //   this.isLoggedIn = inject(TokenService).isAuthenticated(); // esto cambia dependiendo de si el usuario está logueado o no
  //   this.isAdmin = inject(TokenService).isAdmin(); // esto cambia dependiendo de si el usuario es admin o no
  // }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  togglePerfilMenu() {
    this.perfilMenuOpen = !this.perfilMenuOpen;
  }

  // ngOnInit() {
  //   this.isLoggedIn = this.tokenService.isAuthenticated();
  //   // this.isAdmin = this.tokenService.isAdmin();
  // }

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
    // this.router.navigateByUrl('');
    window.location.href = '/'; // Recarga toda la app desde la raíz
  }

  private handleErrors(errors: any) {
    console.error('Error al cerrar sesión:', errors.error);
  }
}
