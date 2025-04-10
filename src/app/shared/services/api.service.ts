import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://01.fy25ey01.64mb.io/';

  constructor( private http: HttpClient ) {}

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(delay(2000));
  }
}


