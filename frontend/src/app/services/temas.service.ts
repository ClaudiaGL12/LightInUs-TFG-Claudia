import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tema } from '../models/tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  private readonly API_URL = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  getTemas() {
    return this.http.get<Tema[]>(`${this.API_URL}/temas`);
  }
}
