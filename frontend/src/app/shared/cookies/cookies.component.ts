import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookies',
  imports: [CommonModule, RouterLink],
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {
  mostrarBanner: boolean = false;

  ngOnInit(): void {
    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
    this.mostrarBanner = cookiesAceptadas === null; /*se muestra si no existe en el localStorage*/
  }

  aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    this.mostrarBanner = false;
  }

  rechazarCookies() {
    localStorage.setItem('cookiesAceptadas', 'false');
    this.mostrarBanner = false;
  }

  cerrarBanner() {
    this.mostrarBanner = false;
  }
}
