import { Component, OnInit } from '@angular/core';
import {GreetingService} from "./greeting.service";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  greeting: any;

  constructor(
    private greetingService: GreetingService
  ) { }

  ngOnInit() {
    this.greetingService.getGreeting().subscribe((res: any) => {
      this.greeting = res.content;
    });
  }

}
