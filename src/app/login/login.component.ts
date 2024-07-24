import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


export class AppModule { }

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

  
})
export class LoginComponent {
  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(private fb: FormBuilder){
   
  
  }

  get email(){
    return this.loginForm.controls['email']
  }

  get password(){
    return this.loginForm.controls['password']
  }

}
