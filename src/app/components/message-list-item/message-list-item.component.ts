import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css'],
})
export class MessageListItemComponent implements OnInit {
  @Output() itemClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.itemClick.emit('msg');
  }
}
