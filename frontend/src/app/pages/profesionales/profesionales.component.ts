import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderStateService } from '../../services/header-state.service';
import { CommonModule } from '@angular/common';
import { ProfesionalesService } from '../../services/profesionales.service';
import { Profesional } from '../../models/profesional.model';
import { TokenService } from '../../services/token.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profesionales',
  imports: [FooterComponent, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  user: User = {} as User;
  profesionales: Profesional[] = [];
  hoveredIndex: number = -1;
  profesionalMostrandoId: number | null = null;
  showBackCard: boolean = false;
  showForm: boolean = false;

  errors: any;
  mensajeExito: string = '';
  mensajeError: string = '';

  profesionalEditandoId: number | null = null;
  profesionalEditando: Profesional = {} as Profesional;

  constructor(
    private headerState: HeaderStateService,
    private profesionalesService: ProfesionalesService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.headerState.setShowInputs(false);
    this.headerState.setIsTemasRoute(false);
    this.headerState.setIsProfesionalesRoute(true);
    this.mostrarProfesionales();
    this.getUser();
  }

  getUser(){
    const user = this.tokenService.getUser();
    if (user) {
      this.user = user;
    }
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

  toggleBackCard(id: number){
    this.profesionalMostrandoId = this.profesionalMostrandoId === id ? null : id;
    if(this.profesionalMostrandoId === null){
      this.showForm = false;
    }
  }

  toggleForm(prof: Profesional){
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.profesionalEditandoId = prof.id;
      this.profesionalEditando = { ...prof, id_user: Number(prof.id_user) };
    } else {
      this.cancelarEdicion();
    }
  }

  editar(prof: Profesional) {
    if (this.profesionalEditandoId === prof.id) {
      // Si ya está editando, cancelar
      this.cancelarEdicion();
    } else {
      this.profesionalEditandoId = prof.id;
      this.profesionalEditando = { ...prof, id_user: Number(prof.id_user) }; // copia para editar
    }
    
  }

  cancelarEdicion() {
    this.profesionalEditandoId = null;
    this.profesionalEditando = {} as Profesional;
    this.showForm = !this.showForm;
  }

  guardarCambios() {
    if (!this.profesionalEditandoId) return;
    this.profesionalesService.editProfesional(this.profesionalEditandoId, this.profesionalEditando).subscribe({
      next: (response: any) => {
        this.mensajeExito = response.message || 'Profesional editado correctamente';
        this.mostrarProfesionales();
        this.cancelarEdicion();
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        // this.mensajeError = 'Error al editar el profesional.';
        this.errors = err.error.errors;

        setTimeout(() => {
          // this.mensajeError = '';
          this.errors = null; // Limpiar errores después de un tiempo
        }, 5000);
      }
    });
  }
}