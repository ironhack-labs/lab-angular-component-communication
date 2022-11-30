import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Character } from '../models/character/character.model';

@Injectable({
  providedIn: 'root'
})

export class CharactersApiService {
  private readonly API_URL = 'https://ih-crud-api.herokuapp.com/characters'
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }

  removeCharacters(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `/${id}`)
  }
}
