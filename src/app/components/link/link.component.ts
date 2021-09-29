import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  link!: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.link = this.userService.getUserUrl();
  }

  handleCopyClick() {
    navigator.clipboard.writeText(this.link);
    console.log('copy to clipboard');
  }
  logout() {
    this.userService.logOut();
  }
}
