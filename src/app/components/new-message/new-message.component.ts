import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css'],
})
export class NewMessageComponent implements OnInit {
  message!: string;
  error: boolean = false;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  saveMessage() {
    if (this.message === '' || this.message === undefined) {
      this.error = true;
    } else this.error = false;
    if (!this.error) {
      const message = {};
      this.message = '';
    }
  }
}
