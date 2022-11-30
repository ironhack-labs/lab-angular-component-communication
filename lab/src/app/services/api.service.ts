import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL = 'https://ih-crud-api.herokuapp.com/';
  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();
  constructor(private http: HttpClient) {}

  getCharacter(): Observable<any> {
    // return this.http.get<any>(`${this.API_URL}characters`);
    return this.http.get<URL>(`${this.API_URL}characters`);
  }

  deleteCharacter(i: number): Observable<any> {
    return this.http.delete<URL>(`${this.API_URL}characters/${i}`);
  }

  get deleteOperationSuccessfulEvent$(): Observable<boolean> {
    return this._deleteOperationSuccessfulEvent$.asObservable();
  }
}
