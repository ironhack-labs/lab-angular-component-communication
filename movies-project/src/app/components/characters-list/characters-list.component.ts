import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  charactersList: Character[];
  charName: string;
  charOccupation: string;
  charWeapon: string;
  charDebt: boolean;

  constructor(){
    this.charactersList =[
      new Character("Lucia", "Astronauta", "Casco", true),
      new Character("Marcos", "Pintor", "Pincel", false)
    ]

    this.charName = "";
    this.charOccupation = "";
    this.charWeapon = "";
    this.charDebt = false;
  }

  ngOnInit(): void {}

  showItem(char:Character) : void {
    console.log(char)
    //DISPLAY DETAILS IN DETAILS COMPONENT:
    //<app-characters-item [charProp]="char"></app-characters-item>
  }

}
