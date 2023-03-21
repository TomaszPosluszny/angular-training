import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsb1';
  parentMessage: string = "Wiadomość";

  //TO DODAŁEM:
  // message:string;
   
  // receiveMessage($event: string):void {
  //   this.message = $event
  // }


  ngOnInit(){}
}
