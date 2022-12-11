import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'alin' && password === 'dummy') {
      return true;
    }
    return false;
  }
}
