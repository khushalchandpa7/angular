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

  // get request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // get request
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  // delete request
  deleteUserById(userId: string): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${userId}`);
  }

  // post request
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // put request
  updateUserById(memberId: string, updatedData: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${memberId}`, updatedData);
  }
}
