import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css'],
})
export class CharacterItemComponent implements OnInit {
  @Input('charProp')
  charac: Character;

  @Output()
  deleteEvent: EventEmitter<number>;

  constructor() {
    this.charac = new Character('', '', false, '', 0, false);
    this.deleteEvent = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  deleteChar(): void {
    console.log('deleting character with Id...' + this.charac.id);
    this.deleteEvent.emit(this.charac.id);
  }
}
