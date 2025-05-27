import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoTemasService } from '../../../services/tipo-temas.service';
import { TipoTema } from '../../../models/tipo-tema.model';
import { FormsModule } from '@angular/forms';
import { Tema } from '../../../models/tema.model';
import { TemasService } from '../../../services/temas.service';

@Component({
  selector: 'app-gestion-tipo-t',
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-tipo-t.component.html',
  styleUrl: './gestion-tipo-t.component.css'
})
export class GestionTipoTComponent {
  tipoTemas: TipoTema[] = [];
  temas: Tema[] = [];
  formularioCrearTipoTema: boolean = false;
  mensajeExito: string = '';
  mensajeError: string = '';
    
  tipoTemaEditandoId: number | null = null;
  tipoTemaEditando: TipoTema = {} as TipoTema;
  nuevoTipoTema: TipoTema = {} as TipoTema;
  
  constructor(private tipoTemasService: TipoTemasService, private temasService: TemasService) {}
  
  ngOnInit(): void {
    this.mostrarTipoTemas();
    this.mostrarTemas();
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

  editar(tipoTema: TipoTema) {
    this.formularioCrearTipoTema = false;
    if (this.tipoTemaEditandoId === tipoTema.id) {
      this.cancelarEdicion();
    } else {
      this.tipoTemaEditandoId = tipoTema.id;
      this.tipoTemaEditando = { ...tipoTema}; // copia para editar
    }
  }
  
  cancelarEdicion() {
    this.tipoTemaEditandoId = null;
    this.tipoTemaEditando = {} as TipoTema;
  }
  
  borrar(id: number) {
    this.tipoTemasService.deleteTipoTema(id).subscribe( {
      next: (response: any) => {
        this.mensajeExito = response.message || 'Tipo tema eliminado correctamente';
        this.mostrarTipoTemas();
        this.ngOnInit(); // recarga
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: error => {
        console.error(error.error.errors, error.error.temas_relacionados);
        const lista = error.error.temas_relacionados ? error.error.temas_relacionados.map((tema: Tema) => tema.name).join(', ') : '';
        this.mensajeError = error.error.errors + ': ' + lista ||'Error al borrar el tipo tema.';
        alert(this.mensajeError);

        setTimeout(() => {
          this.mensajeError = '';
        }, 3000);
      }
      
    });
  }

  guardarCambios() {
    if (!this.tipoTemaEditandoId) return;
    console.log('Guardando tipo tema:', this.tipoTemaEditando);
    this.tipoTemasService.editTipoTema(this.tipoTemaEditandoId, this.tipoTemaEditando).subscribe({
      next: (response: any) => {
        this.mensajeExito = response.message || 'Tipo tema editado correctamente';
        this.mostrarTipoTemas();
        this.cancelarEdicion();
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        this.mensajeError = err.errors ||'Error al editar el tipo Tema.';

        setTimeout(() => {
          this.mensajeError = '';
        }, 3000);
      }
    });
  }

  toggleFormularioCrearTipoTema(){
    this.formularioCrearTipoTema = !this.formularioCrearTipoTema;
    if (this.formularioCrearTipoTema) {
      this.tipoTemaEditandoId = null; 
    }
  }

  agregarTipoTema() {
    this.tipoTemasService.addTipoTema(this.nuevoTipoTema).subscribe({
      next: (response: any) => {
        this.mensajeExito = response.message || 'Tema creado correctamente';
        this.nuevoTipoTema = {} as TipoTema;
        this.formularioCrearTipoTema = false;
        this.mostrarTipoTemas();
  
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: err => {
        console.error(err);
        this.mensajeError = err.errors ||'Error al crear el tema.';
  
        setTimeout(() => {
          this.mensajeError = '';
        }, 3000);
      }
    });
  }
}
