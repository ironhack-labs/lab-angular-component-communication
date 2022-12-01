import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersFromApiService } from '../../services/characters-from-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  characters: Character[];  

  constructor(private charactersFromApiService: CharactersFromApiService) {
    this.characters = [      
      new Character('Cristian Sánchez', 'Programador Junior', 'Katana', true, 0)      
    ];
  }
  

  ngOnInit(): void {
    this.addCharacterList();
  }

  //! Método de añadir nuevos characters

  addCharacterList(): void {
    this.charactersFromApiService.getCharacterList().subscribe({
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
  }

  removeCharacter(index: number): void {
    this.characters.splice(index, 1)
  }
}
