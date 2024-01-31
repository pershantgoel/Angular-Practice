import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
    url = '';
    constructor(private http: HttpClient){}

    getPosts(){
        let headers = new HttpHeaders();
        headers = headers.append('Test', 'test-token')
        return this.http.get(this.url, {headers}).pipe(map((response:any)=> response.data))
    }
}