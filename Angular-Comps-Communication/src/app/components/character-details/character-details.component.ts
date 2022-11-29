import { Component, Input, OnInit } from '@angular/core';
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

  character: CharacterDetails

  constructor(private APIChar: APICharacters) {
    this.character = new CharacterDetails('', '', '', false, 0)
    this.id = 0
  }

  ngOnInit(): void {
    this.getCharDetails(this.id)
  }

  getCharDetails(id: number) {
    console.log('Im the id:', id)
    this.APIChar.getOneCharacter(id).subscribe(
      {
        next: (dataResult) => {
          dataResult.map((el: any) => {
            this.character = new CharacterDetails(el.name, el.occupation, el.weapon, el.debt, el.id)
          })
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
}

