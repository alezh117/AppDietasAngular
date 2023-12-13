import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userStoreService } from 'src/app/services/store/userStore.Service'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent {

  constructor(
    private router: Router,
    public user: userStoreService
    ){}  

  goToMeals(){
    this.router.navigate(['/meals'])
  }

  goToIndex(){
    this.router.navigate(['/index'])
  }

  goToList(){
    this.router.navigate(['/list'])
  }

  goToDiets(){
    this.router.navigate(['/diets'])
  }

  goToUsers(){
    this.router.navigate(['/usuarios'])
  }

  goToDietsUsers(){
    this.router.navigate(['/dietsUsers'])
  }

  goToPerfil(){
    this.router.navigate(['/perfil'])
  }

  goToContacto(){
    this.router.navigate(['/contacto'])
  }

  logOut(){
    this.router.navigate(['/login'])
  }

}
