import { Component } from '@angular/core';
import { UserRegister } from './user-register/user-register';


@Component({
  selector: 'app-root',
   standalone: true, // <== Important for standalone,
   imports: [
    UserRegister
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 

 
}
