
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})



export class UserService {
  private apiUrl = 'http://localhost:3000/api/users'; 

  constructor(private http: HttpClient) {}

  // Inscription
  register( mail: string, password: string ): Observable<any> {
    const user= { mail, password }
    return this.http.post(`${this.apiUrl}`, user);
  }

  // Connexion
  login( mail: string, password: string): Observable<any> {
    const user= { mail, password }
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
