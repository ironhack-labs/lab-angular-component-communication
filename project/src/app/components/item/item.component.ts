import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'Item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input()
    item: Character

    @Output() 
    itemClickEvent: EventEmitter<number>

    constructor() {
        this.item = new Character()
        this.itemClickEvent = new EventEmitter<number>()
    }

    onClick(): void {
        this.itemClickEvent.emit(this.item.id)
    }
}
