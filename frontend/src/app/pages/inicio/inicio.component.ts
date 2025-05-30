import { Component, ViewChild } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HeaderStateService } from '../../services/header-state.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CookiesComponent } from '../../shared/cookies/cookies.component';

@Component({
  selector: 'app-inicio',
  imports: [PieChartComponent, HeaderComponent, CookiesComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(
    private headerState: HeaderStateService,
  ) {}
  
  ngOnInit() {
    this.headerState.setShowInputs(true);
    this.headerState.setIsTemasRoute(false);
    this.headerState.setIsProfesionalesRoute(false);
  }
  
  
   
}
