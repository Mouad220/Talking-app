import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000'; // Ensure the URL is correct

  constructor(private http: HttpClient) { }

  signupUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails); // Correct string interpolation
  }

  getUserByEmail(email: string){
    return this.http.get('${this.baseUrl}/users')
  }
}
