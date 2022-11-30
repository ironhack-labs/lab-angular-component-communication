import { Component } from '@angular/core';
import { Character } from 'src/app/models/character';
import { RandomCharacterService } from 'src/app/service/random-character.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  isShown: boolean;
  charList: Character[];
  name: string;

  constructor(private charService: RandomCharacterService){
    this.charList = [];
    this.name = "";
    this.isShown = false;
    
  }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(){
    this.charService.getAllCharachter().subscribe({
      next: (dataResult) => {
        for(let i in dataResult){
          const name = dataResult[i].name;
          const occupation = dataResult[i].occupation;
          const debt = dataResult[i].debt;
          const weapon = dataResult[i].weapon;
          const id = dataResult[i].id;

          const character = new Character(name, occupation, debt, weapon, id, false)
          this.charList.push(character)
          
        }
      }
    });
  }

  removeChar(i: number){
    this.charService.deleteCharById(this.charList[i].id).subscribe(
      response=>{ this.charList[i] }
    );
    this.charList.splice(i, 1);
  }
  shown(char: Character){
    if(!char.isShown) { return char.isShown = true;}
    else{ return char.isShown = false; }
  }


}
