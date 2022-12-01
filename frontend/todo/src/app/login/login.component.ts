import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  handleLogin() {
    console.log(this.username + ' - ' + 'Logged in successfully!');
    console.log('The password is: ' + this.password);
  }
}
