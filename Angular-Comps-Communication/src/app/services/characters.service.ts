import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class APICharacters {
  private readonly API_URL = "https://ih-crud-api.herokuapp.com";

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.API_URL + "/characters");
  }
  getOneCharacter(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL + `/characters/${id}`);
  }
  deleteCharacter(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `/characters/${id}`);
  }


  // createCharacter(): Observable<any> {
  //   return this.http.post<any>(this.API_URL + "/characters", body);
  // }
}
