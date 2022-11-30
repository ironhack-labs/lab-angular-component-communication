import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/MODELS/movie-detail.model';
import { MovieListService } from 'src/app/SERVICES/movie-list.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  
  charactersArr: MovieDetail[] = [];
 

  constructor(private movieListService: MovieListService){}

  addMovieList(): void{
    this.movieListService.getMovieList().subscribe(
      {
        next: (dataResult) =>{
          for(let char of dataResult){
            let name: string = char.name;
            let occupation: string = char.occupation;
            let debt: boolean = char.debt;
            let weapon: string = char.weapon;
            let id: number = char.id;
            let singleChar: MovieDetail = new MovieDetail( name, occupation, debt, weapon, id)
            this.charactersArr.push(singleChar);
          }
          
          


        },

        error: (error) => { 
          console.log(error);
        }
      })
    
  }
  
  





  ngOnInit(): void {
    this.addMovieList()
  }
}
