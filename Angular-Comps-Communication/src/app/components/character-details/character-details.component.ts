import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterDetails } from 'src/app/models/character-details';
import { APICharacters } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})

export class CharacterDetailsComponent implements OnInit {

  @Input('idProp')
  id: number

  @Output()
  deleteCharacter: EventEmitter<number>

  character: CharacterDetails

  constructor(private APIChar: APICharacters) {
    this.character = new CharacterDetails('', '', '', false, 0)
    this.id = 0
    this.deleteCharacter = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.getCharDetails(this.id)
  }

  getCharDetails(id: number) {
    this.APIChar.getOneCharacter(id).subscribe(
      {
        next: (dataResult) => {
          this.character = new CharacterDetails(dataResult.name, dataResult.occupation, dataResult.weapon, dataResult.debt, dataResult.id)
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Soy el unico', this.character)
        }
      }
    );
  }

  deleteChar() {
    this.deleteCharacter.emit(this.id)
  }
}

