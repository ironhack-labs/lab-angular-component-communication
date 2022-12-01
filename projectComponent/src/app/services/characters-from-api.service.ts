import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersFromApiService {
  private readonly API_URL = 'https://ih-crud-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  getCharacterList(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/characters');
  }

  deleteCharacterList(): Observable<any> {
    return this.http.delete<any>(this.API_URL + '/characters/:id')
  }
}
