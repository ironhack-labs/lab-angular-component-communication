import { Component, EventEmitter, Input, OnInit, } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters-item',
  templateUrl: './characters-item.component.html',
  styleUrls: ['./characters-item.component.css']
})
export class CharactersItemComponent implements OnInit {
  @Input("charProp")
  char: Character;

  constructor() {
    this.char = new Character("", "", "", false, false);
  }

  ngOnInit(): void {}

}
