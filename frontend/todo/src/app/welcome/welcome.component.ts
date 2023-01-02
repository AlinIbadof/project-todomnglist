import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  name = '';
  welcomeMessageFromService: string = '';

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  message = 'Some welcome message';

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSucessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldWithPathVariableService(this.name).subscribe(
      (response) => this.handleSucessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleSucessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }
}
