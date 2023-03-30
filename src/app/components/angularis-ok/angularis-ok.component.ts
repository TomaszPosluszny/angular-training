import { Component, OnInit } from '@angular/core';

declare module "../json/data.json" {
  const value: any;
  export default value;
}


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



}
