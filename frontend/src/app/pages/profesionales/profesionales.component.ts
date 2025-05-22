import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderStateService } from '../../services/header-state.service';

@Component({
  selector: 'app-profesionales',
  imports: [FooterComponent, HeaderComponent],
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