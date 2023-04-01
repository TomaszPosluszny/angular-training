import { Component, OnInit } from '@angular/core';

import * as data from '../json/data.json';


@Component({
  selector: 'app-angularis-ok',
  templateUrl: './angularis-ok.component.html',
  styleUrls: ['./angularis-ok.component.scss']
  
})
export class AngularisOKComponent implements OnInit {

  constructor() {
   
  }
  

  ngOnInit(): void {
  }

  name = "Marcin";
sayHello() {
return "Cześć " + this.name
}

someTitle = ['tomej',' aga']

}






