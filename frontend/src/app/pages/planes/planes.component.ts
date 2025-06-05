import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PlanesService } from '../../services/planes.service';
import { TokenService } from '../../services/token.service';
import { Plan } from '../../models/plan.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planes',
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent {
  planes: Plan[] = [];
  errors: any;
  formulariosVisibles: { [key: string]: boolean } = {}; // Ej: { ansiedad: true } ya que no vienen de la base de datos

  constructor (private planesService: PlanesService, private tokenService: TokenService){}

  ngOnInit(){
    this.mostrarPlanes();
  }

  toggleForm(nombre: string) {
    this.formulariosVisibles[nombre] = !this.formulariosVisibles[nombre];
  }

  mostrarPlanes() {
    const user = this.tokenService.getUser();
    if (!user) return;

    const userId = user.id;

    this.planesService.getPlans(userId).subscribe({
      next: (response: any) => {
        console.log('Respuesta completa:', response);
        this.planes = response.planes; 
        console.log('Temas:', this.planes);
      },
      error: (error) => {
        console.error('Error al obtener los planes:', error.error);
      }
    });
  }

  calcular(nombreForm: string, nombrePlan: string, maxPreguntas: number) {
    const form = document.forms.namedItem(nombreForm) as HTMLFormElement;
    let total = 0;
    let respondidas = 0;

    for (let i = 1; i <= maxPreguntas; i++) {
      const respuesta = form['q' + i]?.value;
      if (respuesta !== undefined) {
        total += parseInt(respuesta);
        respondidas++;
      }
    }

    if (respondidas < maxPreguntas) {
      alert('❗Por favor, responde todas las preguntas.');
      return;
    }

    // Mensajes dinámicos (puedes personalizar por nombrePlan si lo deseas)
    let resultado = '';

    if (total <= 2) {
      resultado = `${nombrePlan} leve. Puedes aplicar técnicas de autocuidado.`;
    } else if (total <= 5) {
      resultado = `${nombrePlan} moderado. Considera recursos de apoyo o ayuda profesional.`;
    } else {
      resultado = `${nombrePlan} elevado. Se recomienda acudir a un profesional.`;
    }

    const user = this.tokenService.getUser();
    if (!user) return;

    this.planesService.addPlan(user.id, resultado, `Plan de ${nombrePlan}`).subscribe({
      next: () => {
        alert('✅ Plan generado y guardado correctamente.');
        location.reload();
      },
      error: (error) => {
        console.error('Error al guardar el plan:', error);
        alert('❌ Error al guardar el plan.');
      }
    });
  }
}