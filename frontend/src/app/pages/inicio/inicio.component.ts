import { Component, ViewChild } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HeaderStateService } from '../../services/header-state.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CookiesComponent } from '../../shared/cookies/cookies.component';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink, PieChartComponent, HeaderComponent, CookiesComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  isLoggedIn = inject(TokenService).isAuthenticated(); // esto cambia dependiendo de si el usuario está logueado o no

  constructor(
    private headerState: HeaderStateService,
  ) {}
  
  ngOnInit() {
    this.headerState.setShowInputs(true);
    this.headerState.setIsTemasRoute(false);
    this.headerState.setIsProfesionalesRoute(false);
  }
  
  
  //preguntas del final
  preguntaAbiertaIndex: number | null = null;

  preguntas = [
    { titulo: '¿Lorem ipsum dolor sit?', respuesta: 'Respuesta 1', tipo: 'texto' },
    { titulo: '¿Cómo contactar con nosotros?', respuesta: 'Puedes escribirnos a contacto@lightinus.com', tipo: 'texto' },
    { titulo: '¿Dónde puedo encontrar ayuda?', respuesta: 'Visita la sección de profesionales.', tipo: 'texto' },
    { titulo: '¿Cómo puedo aportar?', respuesta: 'Puedes colaborar como voluntario.', tipo: 'texto' },
    { titulo: '¿Te gustaría contactarnos directamente?', tipo: 'formulario' }
  ];

  togglePregunta(index: number) {
    this.preguntaAbiertaIndex = this.preguntaAbiertaIndex === index ? null : index;
  }
   
}
