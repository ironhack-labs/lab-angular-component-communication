import { Component } from '@angular/core';
import { RandomCharacterService } from 'src/app/service/random-character.service';

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.css']
})
export class CreateCharComponent {
  name: string;
  occupation: string;
  debt: boolean;
  weapon: string;
  char: {name: string, occupation: string, debt: boolean, weapon: string}

  constructor(private charService:RandomCharacterService){
    this.name = "";
    this.occupation = "";
    this.debt = false;
    this.weapon = "";
    this.char = {name: this.name, occupation: this.occupation, debt: this.debt, weapon: this.weapon}
  }

  isDisabled(): boolean {
    return (
      this.name === "" ||
      this.occupation === "" ||
      this.debt === undefined ||
      this.weapon === ""
    );
  }


  createChar(){
    this.char = {name: this.name, occupation: this.occupation, debt: this.debt, weapon: this.weapon}
    this.charService.createCharacter(this.char).subscribe(response=>{ this.char })
  }

}
