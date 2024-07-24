import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ 
      RippleModule , 
      RouterModule, 
      HttpClientModule,
      ButtonModule ,
      ToastModule, 
      SignupComponent, 
      HomeComponent, 
      CommonModule, RouterOutlet, 
      RouterLink, 
      NavbarComponent,
    ],
    providers: [MessageService]

  })
export class AppComponent {

  title = 'talking';
}


