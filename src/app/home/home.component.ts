import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink]
})
export class HomeComponent {

}
