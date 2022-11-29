import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css'],
})
export class CharacterItemComponent implements OnInit {
  @Input('charProp')
  charac: Character;

  @Input()
  index: number;

  constructor() {
    this.charac = new Character('', '', false, '', 0);
    this.index = this.charac.id;
  }

  ngOnInit(): void {}
}
