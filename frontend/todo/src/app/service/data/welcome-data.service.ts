import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8081/hello-world-bean'
    );
  }

  executeHelloWorldWithPathVariableService(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString,
    // });

    return this.http.get<HelloWorldBean>(
      `http://localhost:8081/hello-world/path-variable/${name}`
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'alin';
  //   let password = 'dummy';
  //   let basicAuthHeaderString =
  //     'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
