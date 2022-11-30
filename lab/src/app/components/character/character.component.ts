import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  data: any;
  clickCharacter: boolean;
  clickIndex: number;
  status: string;

  /* Constructor------------ */
  constructor(private api: ApiService) {
    this.clickCharacter = false;
    this.clickIndex = 0;
    this.status = '';
  }
  ngOnInit(): void {
    // this.refreshData();

    this.api.getCharacter().subscribe({
      next: (dataResult) => {
        this.data = dataResult;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  /* Methods------------ */
  getIndex(i: number): void {
    console.log(this.data[i].id);
  }

  // refreshData(): void {
  //   this.api.getCharacter().subscribe({
  //     next: (dataResult) => {
  //       this.data = dataResult;
  //       // console.log(this.data);
  //     },
  //     error(err) {
  //       console.log(err);
  //     },
  //   });
  // }

  removeCharacter(i: number): void {
    this.api.deleteCharacter(this.data[i].id).subscribe({
      next: (err) => {
        console.log('estamos dentro del NEXT');
        this.status = err;
        this.ngOnInit();
        window.location.reload();
      },
      error(err) {
        console.log(`ESTE ES EL ERRROR ${err.name} `);
        console.log(err);
        window.location.reload();
      },
    });
    console.log(`Este es despues de cliquear en delete ${this.data[i].id}`);
  }
}
