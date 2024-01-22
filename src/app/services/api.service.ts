import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getNextpage = () => {
    this.http.get(`http://localhost:3000/games`);
  };

  sendForm = (form: any) => {
    this.http.post(`http://localhost:3000/forms`, form);
  };
}
