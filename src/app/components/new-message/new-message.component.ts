import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/Interface/Message';
import { User } from 'src/app/Interface/User';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css'],
})
export class NewMessageComponent implements OnInit {
  message!: string;
  error: boolean = false;
  user!: User;
  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.getUser(params['id']).subscribe((res) => {
        this.user = res.data;
        console.log('new message component', this.user);
      });
    });
  }

  saveMessage(): void {
    if (this.message === '' || this.message === undefined) {
      this.error = true;
    } else this.error = false;
    if (!this.error) {
      const message: Message = {
        message: this.message,
        user_id: this.user.id,
      };
      this.messageService.newMessage(message).subscribe((res) => {
        console.log('new message', res.data);
      });
      this.message = '';
    }
  }
}
