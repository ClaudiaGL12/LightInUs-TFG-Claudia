import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  telefono: string = '+32644247300';
  copiado: boolean = false;

  copyNumber() {
    navigator.clipboard.writeText(this.telefono).then(() => {
      this.copiado = true;
      setTimeout(() => {
        this.copiado = false;
      }, 3000); // Oculta el mensaje después de 3 segundos
    }).catch(err => {
      console.error('Error al copiar el número: ', err);
    });
  }
}
