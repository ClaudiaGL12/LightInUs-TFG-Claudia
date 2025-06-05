import { Component, ViewChild } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HeaderStateService } from '../../services/header-state.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CookiesComponent } from '../../shared/cookies/cookies.component';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, PieChartComponent, HeaderComponent, CookiesComponent, FooterComponent],
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
  
  
   
}
