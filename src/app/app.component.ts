import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wsb1';
  parentMessage: string = 'Wiadomość';
  setColor: string = 'blue';
  setColor2: string = 'red';
  klasaCss = ['text-color', 'text2-color','text3-color3'] 
  klasaCss1 = 'text3-color3'

  ngOnInit(): void {
    console.log('setColor');
  }
  updateColor(): void {
    this.setColor2 = 'yellow';
  }
  updateColor2(): void {
  	const index = Math.floor(Math.random() * this.klasaCss.length);
  console.log(this.klasaCss)
  this.klasaCss1 = this.klasaCss[index]
 
    
  
  }


}
