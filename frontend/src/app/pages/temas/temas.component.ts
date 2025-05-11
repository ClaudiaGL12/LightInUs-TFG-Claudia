import { Component } from '@angular/core';
import { HeaderStateService } from '../../services/header-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temas',
  imports: [CommonModule],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {
  constructor(private headerState: HeaderStateService) {}

  ngOnInit() {
    this.headerState.setShowInputs(false);
    this.headerState.setIsTemasRoute(true);
    this.headerState.setIsProfesionalesRoute(false);
  }

  isFavorited = false;

  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
  }
}

