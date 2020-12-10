import { Component } from '@angular/core';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'authapp';
  public username: string;
  public password: string;

  constructor (private userService: UserService) {
    this.username = '';
    this.password = '';
   }

  public login() {
    console.log(this.password);
    this.userService.login(this.username, this.password);
  }
}
