import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/models/list-item';
import { APICharacters } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  charactersNameList: ListItem[];
  showDetails: boolean = false;

  constructor(private APIChar: APICharacters) {
    this.charactersNameList = []
  }

  ngOnInit(): void {
    this.APIChar.getAllCharacters().subscribe(
      {
        next: (dataResult) => {
          dataResult.map((el: any) => {
            this.charactersNameList.push(new ListItem(el.name, el.id))
          })
        },
        error: (error) => {
          console.log(error);
        },
      }
    );
  }

  updateList(updatedList: ListItem[]) {
    this.charactersNameList = updatedList
  }

}
