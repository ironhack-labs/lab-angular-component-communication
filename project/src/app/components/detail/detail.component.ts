import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'Detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    @Input()
    character: Character

    constructor() {
        this.character = new Character()
    }

    ngOnInit(): void {
        console.log(this.character)
    }
}
