import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemasService } from '../../../services/temas.service';
import { Tema } from '../../../models/tema.model';
import { FormsModule } from '@angular/forms';
import { TipoTema } from '../../../models/tipo-tema.model';
import { TipoTemasService } from '../../../services/tipo-temas.service';

@Component({
  selector: 'app-gestion-tema',
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-tema.component.html',
  styleUrl: './gestion-tema.component.css'
})
export class GestionTemaComponent {
  temas: Tema[] = [];
  tipoTemas: TipoTema[] = []; // Asumiendo que tienes un array de tipos de temas
  formularioCrearTema: boolean = false;
  errors: any;
  mensajeExito: string = '';
  mensajeError: string = '';
  
  temaEditandoId: number | null = null;
  temaEditando: Tema = {} as Tema;
  nuevoTema: Tema = {} as Tema;

  constructor(private temasService: TemasService, private tipoTemasService: TipoTemasService) {}
  
  ngOnInit(): void {
    this.mostrarTemas();
    this.mostrarTipoTemas();
  }

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
  
  editar(tema: Tema) {
    this.formularioCrearTema = false;
    if (this.temaEditandoId === tema.id) {
      this.cancelarEdicion(); // Si ya está editando, cancelar
    } else {
      this.temaEditandoId = tema.id;
      this.temaEditando = { ...tema}; // copia para editar
    }
}
  
  cancelarEdicion() {
    this.temaEditandoId = null;
    this.temaEditando = {} as Tema;
  }
  
  borrar(id: number) {
    this.temasService.deleteTema(id).subscribe( {
      next: (response: any) => {
        this.mensajeExito = response.message || 'Tema eliminado correctamente';
        this.mostrarTemas();
        location.reload();
        // this.ngOnInit(); // recarga solo temas
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        this.mensajeError ='Error al borrar el tema.';

        setTimeout(() => {
          this.mensajeError = '';
        }, 5000);
      }
      
    });
  }

  guardarCambios() {
    if (!this.temaEditandoId) return;
    console.log('Guardando tema:', this.temaEditando);
    this.temasService.editTema(this.temaEditandoId, this.temaEditando).subscribe({
      next: (response: any) => {
        this.mensajeExito = response.message || 'Tema editado correctamente';
        this.mostrarTemas();
        this.cancelarEdicion();
        location.reload();

        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        // this.mensajeError = err.error.errors ||'Error al editar el Tema.';
        this.errors = err.error.errors;

        setTimeout(() => {
          // this.mensajeError = '';
          this.errors = null; // Limpiar errores después de un tiempo
        }, 5000);
      }
    });
  }

  toggleFormularioCrearTema(){
    this.formularioCrearTema = !this.formularioCrearTema;
    if (this.formularioCrearTema) {
      this.temaEditandoId = null; // Reiniciar el formulario
    }
  }

  agregarTema() {
    this.temasService.addTema(this.nuevoTema).subscribe({
      next: (response: any) => {
        this.mensajeExito = response.message || 'Tema creado correctamente';
        this.nuevoTema = {} as Tema;
        this.formularioCrearTema = false;
        this.mostrarTemas();
        location.reload();
  
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        // this.mensajeError = err.error.errors ||'Error al crear el tema.';
        this.errors = err.error.errors;

        setTimeout(() => {
          // this.mensajeError = '';
          this.errors = null; // Limpiar errores después de un tiempo
        }, 5000);
      }
    });
  }
}