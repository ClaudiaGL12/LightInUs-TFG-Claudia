import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = environment.apiURL

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }
}
