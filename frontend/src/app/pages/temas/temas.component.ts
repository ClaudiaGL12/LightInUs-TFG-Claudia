import { Component, inject } from '@angular/core';
import { HeaderStateService } from '../../services/header-state.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { TemasService } from '../../services/temas.service';
import { TipoTemasService } from '../../services/tipo-temas.service';
import { TipoTema } from '../../models/tipo-tema.model';
import { Tema } from '../../models/tema.model';
import { Token } from '@angular/compiler';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-temas',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {
  temas: Tema[] = [];
  temasFavoritos: Tema[] = [];
  tipoTemas: TipoTema[] = [];

  constructor(
    private headerState: HeaderStateService,
    private temasService: TemasService,
    private tipoTemasService: TipoTemasService,
    private TokenService: TokenService
  ) {}

  ngOnInit() {
    this.headerState.setShowInputs(false);
    this.headerState.setIsTemasRoute(true);
    this.headerState.setIsProfesionalesRoute(false);

    this.mostrarTemas();
    this.mostrarTipoTemas();
    this.mostrarTemasFavoritos();
  }

  toggleFavorite(tema: Tema) {
    const user = this.TokenService.getUser();
    if (!user) return;

    const userId = user.id;

    if (tema.isFavorited) {
      this.temasService.removeFromFavoritos(userId, tema.id).subscribe({
        next: () => {
          tema.isFavorited = false;
          this.temasFavoritos = this.temasFavoritos.filter(fav => fav.id !== tema.id);
        },
        error: err => console.error('Error al eliminar de favoritos', err)
      });
    } else {
      this.temasService.addToFavoritos(userId, tema.id).subscribe({
        next: () => {
          tema.isFavorited = true;
          this.temasFavoritos.push(tema);
        },
        error: err => console.error('Error al añadir a favoritos', err)
      });
    }
  }

  mostrarTemasFavoritos() {
    const user = this.TokenService.getUser();
    if (!user) return;

    const userId = user.id;

    this.temasService.getTemasFavoritos(userId).subscribe({
      next: (response: any) => {
        const favoritosIds = response.favoritos.map((f: any) => f.pivot.id_tema); // <-- ajusta si la columna es distinta
        console.log('Respuesta completa:', favoritosIds);
        // Marcar en `temas`
        this.temas.forEach(t => {
          t.isFavorited = favoritosIds.includes(t.id);
        });

        // Construir array real de temas favoritos con datos completos
        this.temasFavoritos = this.temas.filter(t => favoritosIds.includes(t.id));

        console.log('Temas Favoritos completos:', this.temasFavoritos);
      },
      error: (error) => {
        console.error('Error al obtener los temas favoritos:', error.error);
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

  getTemasPorTipo(tipoCode: string): Tema[] {
    return this.temas.filter(t => t.tipo_id == tipoCode); // usa == para evitar problemas de tipo
  }

  tieneTemasPorTipo(tipoCode: string): boolean {
    return this.temas.some(t => t.tipo_id == tipoCode);
  }
}

