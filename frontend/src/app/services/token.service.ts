import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handleToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  revokeToken(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    if(this.getToken()){
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    const userJson = localStorage.getItem('user');
    console.log('userJson: ', userJson);
    if (!userJson) return false;

    try {
      const user = JSON.parse(userJson);
      return user.role === 'admin';
    } catch (e) {
      console.error('Error leyendo el usuario desde localStorage:', e);
      return false;
    }
  }
}
