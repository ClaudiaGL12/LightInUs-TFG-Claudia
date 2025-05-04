import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = false; // esto cambia dependiendo de si el usuario está logueado o no
  isAdmin = false; // esto cambia dependiendo de si el usuario es admin o no
  menuOpen = false;
}
