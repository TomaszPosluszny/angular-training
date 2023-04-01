import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { foterDesc, User, Userr  } from 'src/interfaces/interfaces_custom';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() mojanNazwa: string = ''
  num: number =2;
  zmienna: string = '';
  showMsg: boolean = false;
  // counter (){}
  owner: string = 'Tomek';

  foterDesc: foterDesc = {
    owner: 'Tomek',
    year: 2023,
  };
  opis: string = ' To jest słonce';
  sunUrl: string =
    'https://as1.ftcdn.net/v2/jpg/02/29/65/02/1000_F_229650219_Dft28j7Q7sDvJUi7SWqaOrEVO1kZjDdn.jpg';
  placeholder = {
    desc1: 'place1',
    desc2: 'place2',
  };
  jakaKlasa = 'nazwaklasy';
  wartosc: boolean = true;

  color = { blue: 'blue' };

  constructor() {}

  ngOnInit(): void {}

  inputVal(vall: string): void {
    console.log(vall);
  }
  sthOnFocus(): void {
    console.log('kliknięto');
  }

  sthOnBlur(): void {
    console.log('odkliknięto');
  }

  sthOnKeyUp(param: string) {
    console.log(param);
  }
  sthOnKeyUp1(event: any): void {
    console.log(event.target.value);
  }

  users: User[] = [
    { id: 1, name: 'Marcin' },
    { id: 2, name: 'Tomek' },
    { id: 3, name: 'Romek' },
    { id: 4, name: 'Krzysiek' },
  ];
  // pokazDane(user: string | number) {
  //   console.log(user);
  // }
  dane: any;
  pokazDane(user: any) {
    this.dane = user;
  }
  starsArray:any = [
    {id: 0, name: "Slonce", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTGSTdxFHczfuaGcZlx4N6jG1sDQQthMyEqB7Pl9x&s", alt:"Slonce"},
    {id: 1, name: "Mars", img: "https://www.shutterstock.com/image-illustration/mars-planet-3d-rendering-black-260nw-1724343382.jpg", alt:"Mars"}
  ]
  parentMessage: string = "Wiadomość";
   //TO DODAŁEM: 
   
   message: string = "To przekazałem!!"
   @Output() messageEvent = new EventEmitter<string>();
   
   sendMessage():void {
     this.messageEvent.emit(this.message)
   }
   user:Userr = {
    id:1,
    name : "Tomek",
    familyName: "Posłuszny",
    date: "10/02/1989",
    salary: 3000,
    height: 1.80,
  }
 
 }

