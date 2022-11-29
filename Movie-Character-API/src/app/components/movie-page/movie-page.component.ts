import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/character.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  characters: Character[];

  constructor(private getCharactersService: CharactersService) {
    this.characters = [];
  }

  ngOnInit(): void {
    this.showMovieCharacters();
  }

  showMovieCharacters(): void {
    this.getCharactersService.getCharacters().subscribe({
      next: (dataResult) => {
        for (let char of dataResult) {
          let name: string = `${char.name}`;
          let occupation: string = `${char.occupation}`;
          let debt: boolean = char.debt;
          let weapon: string = `${char.weapon}`;
          let id: number = char.id;
          let selectedChar: Character = new Character(
            name,
            occupation,
            debt,
            weapon,
            id
          );
          this.characters.push(selectedChar);
        }
      },
    });
  }

  showDetails(): void {}
}
