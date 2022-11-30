import { HttpClient } from "@angular/common/http";
import { DomElementSchemaRegistry } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../models/character.model";
 
@Injectable({
  providedIn: "root",
})
export class SharedApiService {
  private readonly API_URL = "https://ih-crud-api.herokuapp.com";
 
  constructor(private http: HttpClient) {}
 
  getCharactersList(): Observable<any> {
    return this.http.get<any>(this.API_URL + "/characters");
  }

  deleteCharById(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `/characters/${id}`)
  }
}