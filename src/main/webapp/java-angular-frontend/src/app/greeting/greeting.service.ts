import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(
    private http: HttpClient
  ) { }

  getGreeting(){
    return this.http.get(environment.apiURL + '/greeting');
  }
}
