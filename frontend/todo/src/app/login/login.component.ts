import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  handleLogin() {
    if (this.username === 'alin' && this.password === 'dummy') {
      this.invalidLogin = false;
      console.log(this.username + ' - ' + 'Logged in successfully!');
    } else {
      this.invalidLogin = true;
    }
  }
}
