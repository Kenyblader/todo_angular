
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '/api/users'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Inscription
  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Connexion
  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
