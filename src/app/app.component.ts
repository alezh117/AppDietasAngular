import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { userStoreService } from './services/store/userStore.Service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dietas';
  
  constructor(
    private router: Router,
    private user: userStoreService
    ){}

  ngOnInit(): void {
    this.user.getUserFromLocal()
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
