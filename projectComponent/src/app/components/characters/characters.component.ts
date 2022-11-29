import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  @Input('characterProp')
  character: Character;

  constructor() {
    this.character = new Character('', '', '', true, 0);
  }

  ngOnInit(): void {}
}
