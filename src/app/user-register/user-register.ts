import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css'
})
export class UserRegister {

   constructor(private htpc: HttpClient) {}
 userdetails = new FormGroup({
    emailid: new FormControl(''),
    password1: new FormControl(''),
    cpassword: new FormControl(''),
    sirname: new FormControl(''),
    name1: new FormControl('')
  });

  protected title = 'TravelManagement';

  register() {
    const url = 'http://localhost:8082/SignupUser';
    console.log(this.userdetails.value);
    this.htpc.post(url, this.userdetails.value).subscribe(
      data => {
        console.log("success connected");
      },
      err => {
        console.log("error to create json");
      }
    );
  }
}
