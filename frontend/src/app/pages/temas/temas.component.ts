import { Component } from '@angular/core';
import { HeaderStateService } from '../../services/header-state.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { TemasService } from '../../services/temas.service';

@Component({
  selector: 'app-temas',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {
  constructor(
    private headerState: HeaderStateService,
    private temasService: TemasService
  ) {}

  ngOnInit() {
    this.headerState.setShowInputs(false);
    this.headerState.setIsTemasRoute(true);
    this.headerState.setIsProfesionalesRoute(false);
  }

  isFavorited = false;

  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
  }

  mostrarTemas() {
    this.temasService.getTemas().subscribe({
      next: (response) => {
        console.log('Temas:', response);
      },
      error: (error) => {
        console.error('Error al obtener los temas:', error.error);
      }
    });
  }
}

