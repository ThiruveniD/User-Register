import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class UserService {
  constructor(private http: HttpClient) { }
  getUserDetails() {
    const sampleUrl = 'https://gorest.co.in/public-api/todos';
    return this.http.get(sampleUrl);
  }
}
