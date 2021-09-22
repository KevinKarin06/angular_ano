import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  @Input() height!: any;
  @Input() width!: any;
  url!: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getLoggedInUser().subscribe((res) => {
    //   console.log(res.data.avatar);
    //   if (res.data) {
    //     this.url = 'http://localhost:2000/' + res.data.avatar;
    //   } else {
    //     this.url = '../../../assets/avatar.png';
    //   }
    // });
    console.log(this.url);
  }
}
