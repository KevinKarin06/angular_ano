import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../Model/Message';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  apiUrl = 'http://localhost:2000/api/';
  constructor(private http: HttpClient, private userService: UserService) {}
  getUserMessage(): Observable<any> {
    if (!this.userService.verifyIsLoggedIn()) {
    }
    const id = localStorage.getItem('currentUser');
    return this.http.get(`${this.apiUrl}message/user/${id}`);
  }
  update(message: Message): Observable<any> {
    return this.http.put(`${this.apiUrl}message/${message.id}`, message);
  }
}
