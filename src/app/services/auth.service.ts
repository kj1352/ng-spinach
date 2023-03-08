import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


export const BASE_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  async authenticate(email: string, password: string) {
    return lastValueFrom(this.http.post(BASE_URL + '/api-auth/login', {email, password}));
  }
}
