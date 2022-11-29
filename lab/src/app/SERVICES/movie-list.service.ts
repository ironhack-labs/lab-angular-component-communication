import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private readonly API_URL = "https://ih-crud-api.herokuapp.com";
  constructor(private http: HttpClient) {};

  getMovieList(): Observable<any>{
    return this.http.get<any>(this.API_URL + "/characters")
  }
}
