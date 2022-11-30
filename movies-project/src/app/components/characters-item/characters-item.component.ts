import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters-item',
  templateUrl: './characters-item.component.html',
  styleUrls: ['./characters-item.component.css']
})
export class CharactersItemComponent implements OnInit {
  @Input("charProp")
  char: Character;

  @Output()
  deleteCharEvent : EventEmitter<Character>

  constructor() {
    this.char = new Character("", "", "", false, false, 0);
    this.deleteCharEvent = new EventEmitter<Character>
  }

  ngOnInit(): void {}

  deleteItem(){
    this.deleteCharEvent.emit(this.char)
  }

}
