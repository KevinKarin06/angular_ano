import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  link:string = ' http://www.mysite.com/2jksk?we3';
  constructor() { }

  ngOnInit(): void {
  }

  handleCopyClick(){
    console.log('copy to clipboard');
  }

}
