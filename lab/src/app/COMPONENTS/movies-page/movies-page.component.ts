import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ConnectableObservable, Observable } from 'rxjs';
import { MovieDetail } from 'src/app/MODELS/movie-detail.model';
import { MovieListService } from 'src/app/SERVICES/movie-list.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  
  charactersArr: MovieDetail[] = [];
  clicked: boolean = false;
  clickedCharacter: MovieDetail = new MovieDetail ('', '', false ,'', 0);
  

  constructor(private movieListService: MovieListService){}
  

  addMovieList(): void{
    this.movieListService.getMovieList().subscribe(
      {
        next: (dataResult) =>{
          this.charactersArr = [];
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
  
  
  displayDetails(char: MovieDetail): void{
    this.clickedCharacter = char;
  }
  
  
  isClicked(): boolean{
    
    if( this.clicked ===false){
      this.clicked = true;
    }
    
    return this.clicked;
  }

  deleteChar(id:number): void{
    let deletedChar = this.charactersArr.filter((char)=> char.id === id);
    console.log(id)
    //let indexDeletedChar = this.charactersArr.indexOf(deletedChar[0]);
    //console.log(indexDeletedChar)
    
    this.movieListService.deleteCharacter(id).subscribe({
      next: (data) => {
        console.log("test");
        this.addMovieList();},

      error: (data) => {
        console.log("testerror");
        this.addMovieList()
      }
    })
    
  }

  ngOnInit(): void {
    this.addMovieList()
  }
}
