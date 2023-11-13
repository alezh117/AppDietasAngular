import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent {

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

  goToPerfil(){
    this.router.navigate(['/perfil'])
  }

  goToContacto(){
    this.router.navigate(['/contacto'])
  }

}
