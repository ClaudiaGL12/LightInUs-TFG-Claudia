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

  constructor(private http: HttpClient) {   }
  
  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

  signup(user: UserRegister): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, user);
  }

  logout(): Observable<any> {
    return this.http.delete(`${this.apiURL}/logout`);
  }
}
