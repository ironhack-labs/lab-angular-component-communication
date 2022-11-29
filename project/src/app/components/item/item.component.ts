import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'Item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input()
    item: Character


    constructor() {
        this.item = Object()
    }
}
