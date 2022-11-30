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
  charShow: boolean;

  constructor(){
    this.charactersList =[
      new Character("Lucia", "Astronauta", "Casco", true, false),
      new Character("Marcos", "Pintor", "Pincel", false, false)
    ]

    this.charName = "";
    this.charOccupation = "";
    this.charWeapon = "";
    this.charDebt = false;
    this.charShow = false;
  }

  ngOnInit(): void {}

  showItem(char:Character) : void {
    char.show === true? char.show = false : char.show = true;
  }

}
