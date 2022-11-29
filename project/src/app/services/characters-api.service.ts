import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CharactersApiService {
  private readonly API_URL = 'https://ih-crud-api.herokuapp.com'
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/characters')
  }
}
