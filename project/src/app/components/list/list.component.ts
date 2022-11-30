import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'List',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input() 
    characters: Character[]

    @Output() 
    itemClickEventParent: EventEmitter<number>
    
    constructor() {
        this.characters = []
        this.itemClickEventParent = new EventEmitter<number>()
    }

    onClick(id: number): void {
        this.itemClickEventParent.emit(id)
    }
}
