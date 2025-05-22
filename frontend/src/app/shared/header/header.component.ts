import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { HeaderStateService } from '../../services/header-state.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = inject(TokenService).isAuthenticated(); // esto cambia dependiendo de si el usuario está logueado o no
  showInputsAndCharacteristics = true;
  isTemasRoute = false; // Cambia a true si estás en la ruta de temas
  isProfesionalesRoute = false; // Cambia a true si estás en la ruta de profesionales

  constructor(private headerState: HeaderStateService, tokenService: TokenService) {}

  ngOnInit() {
    this.headerState.showInputs$.subscribe(val => this.showInputsAndCharacteristics = val);
    this.headerState.isTemasRoute$.subscribe(val => this.isTemasRoute = val);
    this.headerState.isProfesionalesRoute$.subscribe(val => this.isProfesionalesRoute = val);
  }
}
