import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
   url = 'https://www.balldontlie.io/api/v1/players';
  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Test', 'Token_Value');
    return this.http.get(this.url, {headers}).pipe(map((response: any) => response.data));
  }
}
