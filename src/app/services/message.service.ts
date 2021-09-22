import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  apiUrl = 'http://localhost:2000/api/';
  constructor(private http: HttpClient) {}
  login(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
