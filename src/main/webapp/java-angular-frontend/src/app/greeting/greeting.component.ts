import {Component, OnInit} from '@angular/core';
import {GreetingService} from "./greeting.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  name: string;
  greeting: any;

  constructor(
    private greetingService: GreetingService,
    private activeroute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activeroute.queryParamMap.subscribe(params => {
      this.name = params["name"];
      this.greetingService.getGreeting(this.name).subscribe((res: any) => {
        this.greeting = res.content;
      });
    });

  }

}
