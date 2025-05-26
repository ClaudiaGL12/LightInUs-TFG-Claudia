import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tema } from '../models/tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {
    // Set the API URL based on the environment
    console.log('API URL:', this.apiURL);
    if (environment.apiURL === '') {
      this.apiURL = 'http://localhost:8000/api'; // Default to localhost if not set
    }
  }
  
  getTemas() {
    return this.http.get<Tema[]>(`${this.apiURL}/temas`);
  }

  getTema(id: number) {
    return this.http.get<Tema>(`${this.apiURL}/temas/${id}`);
  }

  addTema(tema: Tema){
    return this.http.post<Tema>(`${this.apiURL}/temas`, tema);
  }

  editTema(id: number, tema: Tema) {
    return this.http.put<Tema>(`${this.apiURL}/temas/${id}`, tema);
  }

  deleteTema(id: number) {
    return this.http.delete(`${this.apiURL}/temas/${id}`);
  }

  getTemasFavoritos(idUser: number) {
    return this.http.get<Tema[]>(`${this.apiURL}/users/${idUser}/favoritos`); // Replace $id with the actual user ID
  }

  addToFavoritos(userId: number, temaId: number) {
    return this.http.post(`${this.apiURL}/users/${userId}/favoritos/${temaId}`, {});
  }

  removeFromFavoritos(userId: number, temaId: number) {
    return this.http.delete(`${this.apiURL}/users/${userId}/favoritos/${temaId}`);
  }
}
