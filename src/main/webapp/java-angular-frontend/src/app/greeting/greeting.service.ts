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

  getGreeting(name?: any){
    return this.http.get(environment.apiURL + '/greeting', name);
  }
}
