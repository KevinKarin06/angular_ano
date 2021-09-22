import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  user!: User;
  constructor(private userServie: UserService) {}
  ngOnInit(): void {
    this.userServie.getLoggedInUser().subscribe((res) => {
      this.user = res.data;
      console.log('from user info',this.user);
    });
  }
}
