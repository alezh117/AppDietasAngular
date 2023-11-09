import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router){}  

  goToMeals(){
    this.router.navigate(['/meals'])
  }

  goToDiets(){
    this.router.navigate(['/index'])
  }

  goToList(){
    this.router.navigate(['/list'])
  }

}
