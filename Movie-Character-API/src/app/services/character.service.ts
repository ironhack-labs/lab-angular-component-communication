import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly API_URL = 'https://ih-crud-api.herokuapp.com';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/characters');
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `/characters/${id}`);
  }
}
