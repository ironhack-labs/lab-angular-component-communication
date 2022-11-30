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

  /* ------------Constructor------------ */
  constructor(private api: ApiService) {
    this.clickCharacter = false;
    this.clickIndex = 0;
    this.status = '';
  }
  ngOnInit(): void {
    this.refreshData();
  }

  /* ------------Methods------------ */
  refreshData(): void {
    this.api.getCharacter().subscribe({
      next: (dataResult) => {
        this.data = dataResult;
        console.log(this.data);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  removeCharacter(i: number): void {
    this.api.deleteCharacter(this.data[i].id).subscribe({
      next: () => {
        console.log('estamos dentro del NEXT');
        // this.ngOnInit();
        // window.location.reload();
      },
      error(err) {
        console.log(`ESTE ES EL ERRROR ${err.name} `);
        console.log(err);
        // window.location.reload();
      },
    });
    let itemDelete = this.data.splice(i, 1);
    console.log(itemDelete);
  }

  getIndex(i: number): void {
    console.log(this.data[i].id);
  }
}
