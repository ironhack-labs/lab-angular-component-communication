import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersFromApiService } from '../../services/characters-from-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  @Input('characterProp')
  character: Character;

  @Input()
  index: number;

  @Output()
  removeCharacterEvent: EventEmitter<number>

  constructor() {
    this.character = new Character('', '', '', true, 0);
    this.index = 0;
    this.removeCharacterEvent = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  removeCharacterChild(): void {
    this.removeCharacterEvent.emit(this.index)

  }

  //! Terminar
  showDetails(): void {
    console.log("show details working")
    this.character.isClicked = !this.character.isClicked;
  }

  /* deleteCharacterList(): void {
    this.CharactersFromApiService.getCharacterList().subscribe({
      next: (dataResult) => {
        for (let character of dataResult){
          this.characters.push(new Character(
            character.name,
            character.occupation,
            character.weapon,
            character.debt,
            character.id
          ))
        }
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  } */
}
