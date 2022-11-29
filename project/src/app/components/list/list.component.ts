import { Component } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters-api.service';
import { Character } from '../../models/character/character.model'

@Component({
  selector: 'List',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    characters: Character[]

    constructor(private charactersService: CharactersApiService) {
      this.characters = []
    }

    ngOnInit(): void {
      this.charactersService.getCharacters().subscribe({
        next: (dataResult) => {
          console.log(dataResult)
          for( let character of dataResult ){
            this.characters.push(new Character(            
              character.name, 
              character.occupation,
              character.id,
              character.debt,
              character.weapon
            ))
          }
        },
        error: (error) => { // Error response
          console.log(error);
        }
      })
    }   
}
