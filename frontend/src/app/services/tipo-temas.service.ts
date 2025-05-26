import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TipoTema } from '../models/tipo-tema.model';

@Injectable({
  providedIn: 'root'
})
export class TipoTemasService {
  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {
    // Set the API URL based on the environment
    console.log('API URL:', this.apiURL);
    if (environment.apiURL === '') {
      this.apiURL = 'http://localhost:8000/api'; // Default to localhost if not set
    }
  }
  
  getTipoTemas() {
    return this.http.get<TipoTema[]>(`${this.apiURL}/tipo-temas`);
  }

  getTipoTema(id: number) {
    return this.http.get<TipoTema>(`${this.apiURL}/tipo-temas/${id}`);
  }

  addTipoTema(tipoTema: TipoTema){
    return this.http.post<TipoTema>(`${this.apiURL}/tipo-temas`, tipoTema);
  }
  
  editTipoTema(id: number, tipoTema: TipoTema) {
    return this.http.put<TipoTema>(`${this.apiURL}/tipo-temas/${id}`, tipoTema);
  }
  
  deleteTipoTema(id: number) {
    return this.http.delete(`${this.apiURL}/tipo-temas/${id}`);
  }
}
