import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/Interface/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('avatar') avatar!: ElementRef;
  name!: string;
  phone!: string;
  nameError: boolean = false;
  phoneError: boolean = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  loadAvatar() {
    const res = this.avatar.nativeElement.click();
    console.log('load file', this.avatar.nativeElement);
  }
  onSubmit() {
    console.log(this.name);
    if (this.name === '' || this.name === undefined) {
      this.nameError = true;
    } else this.nameError = false;
    if (this.phone === '' || this.phone === undefined) {
      this.phoneError = true;
    } else this.phoneError = false;
    if (!this.nameError && !this.phoneError) {
      const user: User = {
        name: this.name,
        phone: this.phone,
      };
      this.userService.login(user).subscribe((res) => {
        console.log(res);
        // if (res.data) {
        //   console.log(res.data);
        //   localStorage.setItem('currentUser', res[0]id);
        //   this.router.navigate(['home']);
        // }
      });
      this.clearForm();
    }
  }
  clearForm(): void {
    this.name = '';
    this.phone = '';
  }
}
