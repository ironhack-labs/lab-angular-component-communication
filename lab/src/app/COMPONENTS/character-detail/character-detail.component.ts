import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/MODELS/movie-detail.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {

  @Input("character")
  character: MovieDetail;
 @Input()
 index: number;
  

  constructor(){
   this.character = new MovieDetail('','', false, '', 0);
   this.index = 0;
  }
  ngOnInit(): void {}
  
}
