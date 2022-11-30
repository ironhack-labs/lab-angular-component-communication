import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ListItem } from 'src/app/models/list-item';
import { APICharacters } from 'src/app/services/characters.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input('charsList')
  charactersNameList: ListItem[] = []

  @Input('charProp')
  char: ListItem

  @Output()
  updateListEvent: EventEmitter<ListItem[]>;

  id: number = 0
  showDetails: boolean = false
  newList: ListItem[] = []

  constructor(private APIChar: APICharacters) {
    this.char = new ListItem('', 0)
    this.updateListEvent = new EventEmitter<ListItem[]>
  }

  ngOnInit(): void { }

  seeDetails() {
    this.showDetails = !this.showDetails
    this.id = this.char.id
  }

  deleteChar(id: number) {
    console.log('Im deleting this id', id)
    this.APIChar.deleteCharacter(id).subscribe(
      {
        next: () => { },
        error: (error) => {
          this.newList = this.charactersNameList.filter(el => el.id !== id)
          this.updateListEvent.emit(this.newList)
          console.log('Emiting from error...')
        },
        complete: () => { }
      }
    );
  }
}
