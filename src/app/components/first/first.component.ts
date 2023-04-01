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

  tmpArr:any 
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


  
  genNumObj() {
    
for (let i = 0; i < 20; i++) {
      var numObj = Math.floor(Math.random() * 100) + 1;
        
      

      console.log(numObj);
      this.tmpArr = numObj 
    }

    return this.tmpArr;
  }
  public myId = "testId";
public isDisabled = false; //zamień true na false i sprawdźy
public isWrong = false


count = 0;
incrementation(){
this.count += 1;
}


function1(pobranaWartosc : string){
  console.log(pobranaWartosc)
  
  }

  public twoWayBinding = ''
}



