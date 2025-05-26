import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profesional } from '../models/profesional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {
  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {
    // Set the API URL based on the environment
    console.log('API URL:', this.apiURL);
    if (environment.apiURL === '') {
      this.apiURL = 'http://localhost:8000/api'; // Default to localhost if not set
    }
  }
  
  getProfesionales() {
    return this.http.get<Profesional[]>(`${this.apiURL}/profesionales`);
  }

  getProfesional($id: number) {
    return this.http.get<Profesional>(`${this.apiURL}/profesionales/${$id}`);
  }

  addProfesional(profesional: Profesional) {
    return this.http.post<Profesional>(`${this.apiURL}/profesionales`, profesional);
  }
  
  editProfesional(id: number, profesional: Profesional) {
    return this.http.put<Profesional>(`${this.apiURL}/profesionales/${id}`, profesional);
  }
  
  deleteProfesional(id: number) {
    return this.http.delete(`${this.apiURL}/profesionales/${id}`);
  }
  
}
