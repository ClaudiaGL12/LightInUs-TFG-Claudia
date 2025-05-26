import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderStateService } from '../../services/header-state.service';
import { CommonModule } from '@angular/common';
import { ProfesionalesService } from '../../services/profesionales.service';
import { Profesional } from '../../models/profesional.model';

@Component({
  selector: 'app-profesionales',
  imports: [FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  profesionales: Profesional[] = [];
  hoveredIndex: number = -1;

  constructor(
    private headerState: HeaderStateService,
    private profesionalesService: ProfesionalesService
  ) {}

  ngOnInit(): void {
    this.headerState.setShowInputs(false);
    this.headerState.setIsTemasRoute(false);
    this.headerState.setIsProfesionalesRoute(true);
    this.mostrarProfesionales();
  }

  mostrarProfesionales() {
    this.profesionalesService.getProfesionales().subscribe({
      next: (response: any) => {
        console.log('Respuesta completa:', response);
        this.profesionales = response.profesionales; // ✅ Accede al array dentro de `data`
        console.log('Profesionales:', this.profesionales);
      },
      error: (error) => {
        console.error('Error al obtener los profesionales:', error.error);
      }
    });
  }
}