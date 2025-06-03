import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IaService {
  private readonly apiURL = environment.apiURL;
  
  constructor(private http: HttpClient) {
    // Set the API URL based on the environment
    console.log('API URL:', this.apiURL);
    if (environment.apiURL === '') {
      this.apiURL = 'http://localhost:8000/api'; // Default to localhost if not set
    }
  }

  enviarMensaje(mensajeUsuario: string) {
    return this.http.post<{ respuesta: string }>(`${this.apiURL}/chatbot`, {pregunta: mensajeUsuario});
  }
}
