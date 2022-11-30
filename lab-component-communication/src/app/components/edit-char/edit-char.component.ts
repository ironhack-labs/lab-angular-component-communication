import { Component, Input } from '@angular/core';
import { RandomCharacterService } from 'src/app/service/random-character.service';

@Component({
  selector: 'app-edit-char',
  templateUrl: './edit-char.component.html',
  styleUrls: ['./edit-char.component.css']
})
export class EditCharComponent {
  name: string;
  occupation: string;
  debt: boolean;
  weapon: string;
  char: {name: string, occupation: string, debt: boolean, weapon: string}

  @Input()
  id: number;

  constructor(private charService: RandomCharacterService){
    this.name = "";
    this.occupation = "";
    this.debt = false;
    this.weapon = "";
    this.char = {name: this.name, occupation: this.occupation, debt: this.debt, weapon: this.weapon};
    this.id = 0;

  }

  ngOnInit(): void{
    this.charService.getCharById(this.id).subscribe(response=>{ 
      this.name = response.name;
      this.occupation = response.occupation;
      this.debt = response.debt;
      this.weapon = response.weapon; 
    })
  }


  editChar(id: number){
    
    this.char.name = this.name;
    this.char.occupation = this.occupation;
    this.char.debt = this.debt;
    this.char.weapon = this.weapon;

    this.charService.editCharacter(id, this.char).subscribe(response=>{

    this.char;
      
    })
  }

}
