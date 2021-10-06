import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Interface/Message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages!: Message[];
  selectedMessage!: Message;
  selected: boolean = false;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getUserMessage().subscribe((res) => {
      if (res.data != null) {
        this.messages = res.data.map(function (
          item: any,
          _index: any,
          _array: any
        ) {
          item.selected = false;
          return item;
        });
        console.log(this.messages);
      }
    });
  }
  handleItemClick(message: Message) {
    this.selectedMessage = message;
    message.read = true;
    this.messageService.update(this.selectedMessage).subscribe((res) => {
      console.log('update', res);
    });
    this.clearAllSelected();
    message.selected = !message.selected;
  }
  clearAllSelected(): void {
    this.messages = this.messages.map(function (
      item: any,
      _index: any,
      _array: any
    ) {
      item.selected = false;
      return item;
    });
  }
  deleteAll() {
    this.messages.forEach(
      (message: Message, index: number, array: Message[]) => {
        this.messageService.delete(message).subscribe((res) => {
          console.log('deleted', res);
        });
      }
    );
    this.messages=[];
    // this.selectedMessage = undefined;
  }
}
