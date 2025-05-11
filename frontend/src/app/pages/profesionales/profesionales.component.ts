import { Component } from '@angular/core';
import { HeaderStateService } from '../../services/header-state.service';

@Component({
  selector: 'app-profesionales',
  imports: [],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  constructor(private headerState: HeaderStateService) {}

  ngOnInit(): void {
    this.headerState.setShowInputs(false);
    this.headerState.setIsTemasRoute(false);
    this.headerState.setIsProfesionalesRoute(true);
  }
}