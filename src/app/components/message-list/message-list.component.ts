import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Model/Message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages!: Message[];
  selected!: Message;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getUserMessage().subscribe((res) => {
      if (res.data != null) {
        this.messages = res.data;
        console.log(this.messages);
      }
    });
  }
  handleItemClick(message: Message) {
    this.selected = message;
    message.read = true;
    this.messageService.update(this.selected).subscribe((res) => {
      console.log('update', res);
    });
  }
}
