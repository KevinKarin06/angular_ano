import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Message } from 'src/app/Model/Message';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css'],
})
export class MessageListItemComponent implements OnInit {
  @Output() itemClick = new EventEmitter();
  @Input() message!: Message;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    // this.selected=!this.selected;
    this.itemClick.emit(this.message);
  }
}
