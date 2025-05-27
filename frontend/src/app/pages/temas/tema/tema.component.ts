import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemasService } from '../../../services/temas.service';
import { Tema } from '../../../models/tema.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tema',
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent {
  temaId!: number;
  tema: Tema = {} as Tema; // Inicializa como un objeto vacío

  constructor(private route: ActivatedRoute, private temasService: TemasService) {}

  ngOnInit() {
    this.temaId = Number(this.route.snapshot.paramMap.get('id'));
    this.mostrarTema();
  }

  mostrarTema() {
    this.temasService.getTema(this.temaId).subscribe({
      next: (response: any) => {
        console.log('Respuesta completa:', response);
        this.tema = response.tema; // ✅ Accede al array dentro de `data`
        console.log('Temas:', this.tema);
      },
      error: (error) => {
        console.error('Error al obtener los temas:', error.error);
      }
    });
  }
}
