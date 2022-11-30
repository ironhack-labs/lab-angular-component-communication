import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  charactersList: Character[];
  deletedCharactersList: Character[];
  charName: string;
  charOccupation: string;
  charWeapon: string;
  charDebt: boolean;
  charShow: boolean;

  constructor(){
    this.charactersList =[
      new Character("Lucia", "Astronauta", "Casco", true, false),
      new Character("Marcos", "Pintor", "Pincel", false, false),
      new Character("Paco", "Abogado", "Mano izquierda", false, false),
      new Character("Pepe", "Ministro", "Consitutución", true, false),
      new Character("Marcos", "Barrendero", "Pelusas", true, false),
      new Character("María", "Panadera", "Levadura", false, false),
    ]

    this.deletedCharactersList=[]

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

  deleteItem(char:Character){
    console.log(this.charactersList)
    console.log(this.deletedCharactersList)

    this.charactersList.filter(character => character === char).forEach(character => this.deletedCharactersList.push(character));
    this.charactersList = this.charactersList.filter(character => character !== char);

    console.log(this.charactersList)
    console.log(this.deletedCharactersList)
  }
}
