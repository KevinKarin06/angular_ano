import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  list = [1, 3, 4, 5, 6, 6, 7, 8, 9, 0, 11, 23, 34, 4];
  constructor() {}
  view = false;
  selected = '';

  ngOnInit(): void {}
  handleItemClick() {
    console.log('change view');
    this.view = true;
    this.selected = 'new selected item';
  }
}
