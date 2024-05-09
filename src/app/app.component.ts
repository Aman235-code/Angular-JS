import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent, CommonModule ],

templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  users = [
    {name:"Aman",isSingle:true, salary:1000},
    {name:"suresh",isSingle:false, salary:7000},
    {name:"mahesh",isSingle:true, salary:9000},
  ]
}
