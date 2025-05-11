import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HeaderStateService } from '../../services/header-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false; // esto cambia dependiendo de si el usuario está logueado o no
  isAdmin = false; // esto cambia dependiendo de si el usuario es admin o no
  menuOpen = false;
  showInputsAndCharacteristics = true;
  isTemasRoute = false; // Cambia a true si estás en la ruta de temas
  isProfesionalesRoute = false; // Cambia a true si estás en la ruta de profesionales

  constructor(private headerState: HeaderStateService) {}

  ngOnInit() {
    this.headerState.showInputs$.subscribe(val => this.showInputsAndCharacteristics = val);
    this.headerState.isTemasRoute$.subscribe(val => this.isTemasRoute = val);
    this.headerState.isProfesionalesRoute$.subscribe(val => this.isProfesionalesRoute = val);
  }
}
