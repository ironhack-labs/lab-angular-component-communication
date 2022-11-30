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

  @Input()
  index: number;

  @Output()
  showDetailsEvent: EventEmitter<number>;

  constructor() {
    this.charac = new Character('', '', false, '', 0, false);
    this.index = this.charac.id;
    this.showDetailsEvent = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  showDetails(): void {
    console.log('showing details of character...' + this.index);
    this.showDetailsEvent.emit(this.index);
  }
}
