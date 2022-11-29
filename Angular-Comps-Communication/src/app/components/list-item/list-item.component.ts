import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/models/list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input('charProp')
  char: ListItem

  constructor() {
    this.char = new ListItem('', 0)
  }

  ngOnInit(): void { }
}
