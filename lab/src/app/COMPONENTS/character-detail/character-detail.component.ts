import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDetail } from 'src/app/MODELS/movie-detail.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {

  @Input("character")
  character: MovieDetail;
  
  @Output()
  deleteCharEvent: EventEmitter<number>;

  

  constructor(){
   this.character = new MovieDetail('','', false, '', 0);
   this.deleteCharEvent = new EventEmitter<number>
   
  }
  ngOnInit(): void {}

  deleteChar(char: MovieDetail): void{
    console.log(`deleting char + ${char.id}`)
    this.deleteCharEvent.emit(char.id);
  }
  
}
