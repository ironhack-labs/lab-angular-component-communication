import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RandomCharacterService {
  private readonly API_URL = 'https://ih-crud-api.herokuapp.com/'

  @Input()
  id: number;


  constructor(private http: HttpClient) { 
    this.id = 0;
  }

  getAllCharachter(): Observable<any> {
    return this.http.get<any>(this.API_URL + "characters");
  }

  deleteCharById(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `characters/${id}`)
  }

  // getCharById(): Observable<any> {
  //   return this.http.get<any>(`${this.API_URL}${id}`)
  // }
  createCharacter(character: {name: string, occupation: string, debt: boolean, weapon: string}): Observable<any> {
    return this.http.post(this.API_URL + 'characters/', character)
  }

  
  
}


