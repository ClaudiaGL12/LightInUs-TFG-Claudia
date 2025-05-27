import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesionalesService } from '../../../services/profesionales.service';
import { UserService } from '../../../services/user.service';
import { Profesional } from '../../../models/profesional.model';
import { User } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gestion-prof',
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-prof.component.html',
  styleUrl: './gestion-prof.component.css'
})
export class GestionProfComponent {
  profesionales: Profesional[] = [];
  users: User[] = [];
  formularioCrearProf: boolean = false;
  errors: any;
  mensajeExito: string = '';
  mensajeError: string = '';

  profesionalEditandoId: number | null = null;
  profesionalEditando: Profesional = {} as Profesional;
  nuevoProfesional: Profesional = {} as Profesional;

  constructor(private profesionalesService: ProfesionalesService, private usersService: UserService) {}

  ngOnInit(): void {
    this.mostrarProfesionales();
    this.mostrarUsuarios();
  }

  //obtener profesionales y usuarios
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

  mostrarUsuarios() {
    this.usersService.getUsers().subscribe({
      next: (response: any) => {
        // console.log('Respuesta completa:', response);
        this.users = response.users; // ✅ Accede al array dentro de `data`
        console.log('Usuarios:', this.users);
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error.error);
      }
    });
  }

  get usuariosDisponibles(): User[] {
    const idsUsados = new Set(this.profesionales.map(p => p.id_user));
    return this.users.filter(user => !idsUsados.has(user.id));
  }

  editar(prof: Profesional) {
    this.formularioCrearProf = false;
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

  borrar(id: number) {
    this.profesionalesService.deleteProfesional(id).subscribe( {
      next: (response: any) => {
        this.mensajeExito = response.message || 'Profesional eliminado correctamente';
        this.mostrarProfesionales();
        this.ngOnInit(); // recarga
        setTimeout(() => {
          this.mensajeExito = '';
        }, 5000);
      },
      error: err => {
        console.error(err);
        this.mensajeError ='Error al borrar el profesional.';

        setTimeout(() => {
          this.mensajeError = '';
        }, 5000);
      }
      
    });
  }

  toggleFormularioCrearProf(){
    this.formularioCrearProf = !this.formularioCrearProf;
    if (this.formularioCrearProf) {
      this.profesionalEditandoId = null; // Reiniciar el formulario
    }
  }

  agregarProf() {
    this.profesionalesService.addProfesional(this.nuevoProfesional).subscribe({
      next: (response: any) => {
        this.mensajeExito = response.message || 'Profesional creado correctamente';
        this.nuevoProfesional = {} as Profesional;
        this.formularioCrearProf = false;
        this.mostrarProfesionales();

        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        // this.mensajeError ='Error al crear el profesional.';
        this.errors = err.error.errors;

        setTimeout(() => {
          // this.mensajeError = '';
          this.errors = null; // Limpiar errores después de un tiempo
        }, 5000);
      }
    });
  }
}
