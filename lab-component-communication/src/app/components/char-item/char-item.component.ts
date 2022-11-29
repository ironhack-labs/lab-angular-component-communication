import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-char-item',
  templateUrl: './char-item.component.html',
  styleUrls: ['./char-item.component.css']
})
export class CharItemComponent {
  

  @Input()
  char: Character;

  @Input()
  index: number;

  @Output()
  indexChar = new EventEmitter<number>
  @Output()
  charId = new EventEmitter<number>


  constructor(){
    this.char = new Character("", "", false, "", 0, false);
    this.index = 0;
  }
  
  removeChar(){
    this.indexChar.emit(this.index);
    this.charId.emit(this.char.id)
  }
}
