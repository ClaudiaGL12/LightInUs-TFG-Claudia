import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private readonly apiURL = environment.apiURL;
  
  constructor(private http: HttpClient) {
    // Set the API URL based on the environment
    console.log('API URL:', this.apiURL);
    if (environment.apiURL === '') {
      this.apiURL = 'http://localhost:8000/api'; // Default to localhost if not set
    }
  }

  getPlans($idUser: number){
    return this.http.get<Plan[]>(`${this.apiURL}/users/${$idUser}/plans`);
  }

  getPlan($idUser: number, id: number) {
    return this.http.get<Plan>(`${this.apiURL}/users/${$idUser}/plans/${id}`);
  } 
 
  addPlan($idUser: number, resultadoForm: string, name:string){
    return this.http.post<Plan[]>(`${this.apiURL}/users/${$idUser}/plans`, {form_result:resultadoForm, name:name});
  }

  deletePlan($idUser: number, id: number) {
    return this.http.delete(`${this.apiURL}/users/${$idUser}/plans/${id}`);
  }
}
