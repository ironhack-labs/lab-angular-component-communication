import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListService } from 'src/app/SERVICES/movie-list.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  
  namesArr: Array<string> = [];

  constructor(private movieListService: MovieListService){}

  addMovieList(): void{
    this.movieListService.getMovieList().subscribe(
      {
        next: (dataResult: Array<any>) =>{
          
          for(let char of dataResult){
              let name = char.name;
              this.namesArr.push(name)
              
              
          }
          console.log(this.namesArr)
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
