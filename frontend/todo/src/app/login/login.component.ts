import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //Router through dependency injection
  constructor(private router: Router) {}

  username = '';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  handleLogin() {
    if (this.username === 'alin' && this.password === 'dummy') {
      this.invalidLogin = false;
      console.log(this.username + ' - ' + 'Logged in successfully!');
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
