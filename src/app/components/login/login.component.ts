import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name!: string;
  phone!: string;
  nameError: boolean = false;
  phoneError: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    if (userService.verifyIsLoggedIn()) {
      router.navigate(['home']);
      console.log('logged In');
    }
    console.log('user log in component')
  }

  ngOnInit(): void {}
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
        if (res.data) {
          console.log(res.data);
          localStorage.setItem('currentUser', res.data.id);
          this.router.navigate(['home']);
        }
      });
      this.clearForm();
    }
  }
  clearForm(): void {
    this.name = '';
    this.phone = '';
  }
}
