import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlaskService {
  private url = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  getFlaskData() {
    return this.http.get(this.url, { responseType: 'text' });
  }
}
