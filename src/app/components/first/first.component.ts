import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

 

  

  constructor() { }

  ngOnInit(): void {
  }
  owner:{} = {}

  sthOnFocus(): void {
    console.log('kliknięto');
  }

  sthOnBlur(): void {
    console.log('odkliknięto');
  }

  
  inputVal(val: string): void {
    console.log(val);
  }
  
  lotto(): void {
    let szostka = [], i;
    for(i=0; i<20; i++) szostka[i] = Math.floor(Math.random() * 100) + 1;
  console.log(szostka)
 


}
  // this.klasaCss1 = this.klasaCss[index]
}
