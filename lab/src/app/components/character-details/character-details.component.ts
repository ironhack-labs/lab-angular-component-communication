import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  @Input('ocuppationProp')
  ocuppation: any;

  @Input('weaponProp')
  weapon: any;

  @Input()
  index: number;

  @Output()
  removeCharctersItem: EventEmitter<number>;

  constructor() {
    this.ocuppation = '';
    this.weapon = '';
    this.index = 0;
    this.removeCharctersItem = new EventEmitter<number>();
  }

  removeItemChild(): void {
    console.log(`deleting the character index = ${this.index}`);
    this.removeCharctersItem.emit(this.index);
  }
}
