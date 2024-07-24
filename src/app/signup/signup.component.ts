import { Component} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { passwordMatchValidator } from '../shared/password-match.directive';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/auth';
import { ToastModule } from 'primeng/toast'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MessageService } from 'primeng/api'
import { HttpClientModule } from '@angular/common/http';

export class AppModule { }

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule, ToastModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent { 


  signupForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)$/)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
    confirmPassword: ['',Validators.required]
  },{
    Validators: passwordMatchValidator
  }
  
  )
 
  constructor (
     private fb: FormBuilder,
     private authService: AuthService, 
     private messageService: MessageService,
     private router: Router   
     ){}

  get fullName(){
    return this.signupForm.controls['fullName'];
  }

  get email(){
    return this.signupForm.controls['email'];
  }
 
  get password(){
    return this.signupForm.controls['password'];
  }

  get confirmPassword(){
    return this.signupForm.controls['confirmPassword'];
  
  }
  submitDetails(){
    const postData = {  ...this.signupForm.value };
    delete postData.confirmPassword;
    this.authService.signupUser(postData as User).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'signu Successfully' });
        this.router.navigate(['login'])
      },
       error => {
        this.messageService.add({ severity: 'error', summary: 'Success', detail: 'Something Wont wrong' });
       }
        
    )
  }



}
