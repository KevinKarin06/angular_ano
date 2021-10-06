import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/Interface/Message';

@Component({
  selector: 'app-message-body',
  templateUrl: './message-body.component.html',
  styleUrls: ['./message-body.component.css'],
})
export class MessageBodyComponent implements OnInit {
  @Input() message!: Message;
  constructor() {}

  ngOnInit(): void {
    console.log('message-body', this.message);
  }
}
