import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../module/user-module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'http://localhost:3000/users';
  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  deleteUserById(userId: string) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  addUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUserById(memberId: string, updatedData: User) {
    return this.http.put(`${this.apiUrl}/${memberId}`, updatedData);
  }
}
