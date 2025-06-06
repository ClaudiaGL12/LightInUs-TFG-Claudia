import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthCredentials } from '../models/auth-credentials.model';
import { UserRegister } from '../models/user-register.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {
    // Set the API URL based on the environment
    console.log('API URL:', this.apiURL);
    if (environment.apiURL === '') {
      this.apiURL = 'http://localhost:8000/api'; // Default to localhost if not set
    }
  }
  
  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

  signup(user: UserRegister): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, user);
  }

  logout(): Observable<any> {
    localStorage.removeItem('user');
    localStorage.removeItem('cookiesAceptadas');
    localStorage.removeItem('access_token');
    window.location.href = '/'
    return this.http.delete(`${this.apiURL}/logout`);
  }
}
