import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/users/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = 'http://localhost:3000/users';
  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.baseUrl, user);
  }

  // delete(userId: Number): Observable<User[]> {
  //   return this.http.delete<User[]>(this.baseUrl, userId);
  // }
}
