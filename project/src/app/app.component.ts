import { Component } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters-api.service';
import { Character } from './models/character/character.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentID: number
    characters: Character[]
    currentCharacter: Character

    constructor(private charactersService: CharactersApiService) {
      this.currentID = 1
      this.characters = []
      this.currentCharacter = new Character()
    }

    ngOnInit(): void {
      this.charactersService.getCharacters().subscribe({
        next: (dataResult) => {
          console.log(dataResult)
          for( let character of dataResult ){
            this.characters.push(new Character(            
              character.name, 
              character.id,
              character.occupation,
              character.weapon,
              character.debt
            ))
          }
        },
        error: (error) => { // Error response
          console.log(error);
        }
      })
    }   

    changeCurrent(id: number): void {
        console.log('NEW ID: ', id)
        this.currentID = id
        this.currentCharacter = this.characters.filter((current) => current.id === this.currentID)[0]
        console.log('CURRENT CHAR: ', this.currentCharacter)
    }
}
