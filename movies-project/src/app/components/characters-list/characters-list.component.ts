import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { SharedApiService } from 'src/app/services/shared-api.service';

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
  charId: number;

  constructor(private sharedApiService: SharedApiService){

    this.charactersList = []
    this.deletedCharactersList=[]

    this.charName = "";
    this.charOccupation = "";
    this.charWeapon = "";
    this.charDebt = false;
    this.charShow = false;
    this.charId = 0;
  }

  ngOnInit(): void {
    this.sharedApiService.getCharactersList().subscribe(
      {
        next: (dataResult) => {
          for(let i=0; i<dataResult.length; i++){
            this.charactersList.push(
              new Character(dataResult[i].name, dataResult[i].occupation, dataResult[i].weapon, dataResult[i].debt, false, dataResult[i].id)
            )
          }
        }
      }
    )
  }

  showItem(char:Character) : void {
    char.show === true? char.show = false : char.show = true;
  }

  deleteItem(char:Character){
    let charId = char.id;
    console.log(charId)
    this.sharedApiService.deleteCharById(charId).subscribe()
    this.charactersList = this.charactersList.filter(character => character !== char)
  }

  getApiList(){}

  reLoadList() {
    this.charactersList = [];
    this.ngOnInit()
  }
}
