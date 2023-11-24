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

  goToDiets(){
    this.router.navigate(['/index'])
  }

  goToList(){
    this.router.navigate(['/list'])
  }

  goToUsers(){
    this.router.navigate(['/usuarios'])
  }

  goToPerfil(){
    this.router.navigate(['/perfil'])
  }

  goToContacto(){
    this.router.navigate(['/contacto'])
  }

}
