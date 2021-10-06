import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input() message!: string;
  @Input() color!: string;
  @Input() duration!: number;
  visible: boolean = true;
  timer!: any;
  constructor() {}

  ngOnInit(): void {
    this.timer = setTimeout((arg: any) => {
      this.visible = false;
    }, 1000);
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
