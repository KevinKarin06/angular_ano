import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-body',
  templateUrl: './message-body.component.html',
  styleUrls: ['./message-body.component.css'],
})
export class MessageBodyComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
