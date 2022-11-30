import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'Detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    @Input()
    character: Character


    @Output() 
    deleteEvent: EventEmitter<number>

    constructor() {
        this.character = new Character()
        this.deleteEvent = new EventEmitter<any>()
    }

    ngOnInit(): void {
        console.log(this.character)
    }

    onDelete(): void {
        this.deleteEvent.emit(this.character.id)
    }
}
