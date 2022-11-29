import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/MODELS/movie-detail.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {
 
  charName: string;
  charOccupation: string;
  charDebt: boolean;
  charWeapon: string;
  charId: number;


  constructor(){
    this.charName = "";
    this.charOccupation = "";
    this.charDebt = false;
    this.charWeapon= "";
    this.charId = 0;
  }
  ngOnInit(): void {}

}
