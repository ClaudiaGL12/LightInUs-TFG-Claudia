import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IaService } from '../../../services/ia.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  abierto = false;
  mensajes: { texto: string, origen: 'usuario' | 'bot' }[] = [];
  mensajeUsuario: string = '';


  constructor(private chatbotService: IaService){}

  toggleChat() {
    this.abierto = !this.abierto;
  }

  enviarMensaje() {
    const mensaje = this.mensajeUsuario.trim();
    if (!mensaje) return;

    this.mensajes.push({ texto: mensaje, origen: 'usuario' });
    this.mensajeUsuario = '';

    this.chatbotService.enviarMensaje(mensaje).subscribe({
      next: (res) => {
        this.mensajes.push({ texto: res.respuesta, origen: 'bot' });
      },
      error: () => {
        this.mensajes.push({ texto: 'Lo siento, no pude procesar tu solicitud en este momento.', origen: 'bot' });
      }
    });
  }
}
