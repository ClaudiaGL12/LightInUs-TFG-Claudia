import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';
import { TemasService } from '../../services/temas.service';
import { TipoTemasService } from '../../services/tipo-temas.service';
import { ProfesionalesService } from '../../services/profesionales.service';
import { Profesional } from '../../models/profesional.model';
import { Tema } from '../../models/tema.model';
import { TipoTema } from '../../models/tipo-tema.model';
import { GestionProfComponent } from './gestion-prof/gestion-prof.component';
import { GestionTemaComponent } from './gestion-tema/gestion-tema.component';
import { GestionTipoTComponent } from './gestion-tipo-t/gestion-tipo-t.component';

@Component({
  selector: 'app-gestion',
  imports: [NavbarComponent, FooterComponent, CommonModule, GestionProfComponent, GestionTemaComponent, GestionTipoTComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {
  profesionales: Profesional[] = [];
  temas: Tema[] = [];
  tipoTemas: TipoTema[] = [];

  constructor(
    private tokenService: TokenService,
    private temasService: TemasService,
    private tipoTemasService: TipoTemasService,
    private profesionalesService: ProfesionalesService
  ) { }

  // ngOnInit(): void {
  //   this.mostrarProfesionales();
  //   this.mostrarTemas();
  //   this.mostrarTipoTemas();
  // }

  // Temas
  mostrarTemas() {
    this.temasService.getTemas().subscribe({
      next: (response: any) => {
        console.log('Respuesta completa:', response);
        this.temas = response.temas; // ✅ Accede al array dentro de `data`
        console.log('Temas:', this.temas);
      },
      error: (error) => {
        console.error('Error al obtener los temas:', error.error);
      }
    });
  }


  eliminarTema(id: number) {
    this.temasService.deleteTema(id).subscribe({
      next: () => {
        this.mostrarTemas();
      },
      error: err => console.error('Error al borrar tema:', err)
    });
  }

  // TipoTemas
  mostrarTipoTemas() {
    this.tipoTemasService.getTipoTemas().subscribe({
      next: (response: any) => {
        console.log('Respuesta completa:', response);
        this.tipoTemas = response.tipo_temas; // ✅ Accede al array dentro de `data`
        console.log('Tipo Temas:', this.tipoTemas);
      },
      error: (error) => {
        console.error('Error al obtener los tipos de temas:', error.error);
      }
    });
  }

  verTipoTema(tipo: TipoTema) {
    console.log('Ver tipo tema', tipo);
  }

  // editarTipoTema(tipo: TipoTema) {
  //   this.tipoTemasService.editTipoTema(tipo).subscribe({
  //     next: (response: any) => {
  //       console.log('Tipo tema editado:', response);
  //       this.mostrarTipoTemas();
  //     },
  //     error: err => console.error('Error al editar tipo tema:', err)
  //   });
  // }

  eliminarTipoTema(id: number) {
    this.tipoTemasService.deleteTipoTema(id).subscribe({
      next: () => {
        this.mostrarTipoTemas();
      },
      error: err => console.error('Error al borrar tipo tema:', err)
    });
  }

  // Profesionales
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

  verProfesional(prof: Profesional) {
    console.log('Ver profesional', prof);
  }

  

  eliminarProfesional(id: number) {
    this.profesionalesService.deleteProfesional(id).subscribe({
      next: () => {
        this.mostrarProfesionales();
      },
      error: err => console.error('Error al borrar profesional:', err)
    });
  }
}
