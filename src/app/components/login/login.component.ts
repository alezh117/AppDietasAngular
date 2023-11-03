import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminStoreService } from 'src/app/services/Storage/admin-store.service.ts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = ""; 

  constructor(private router: Router ,private data: AdminStoreService) { }

  onSubmit(){     
    this.data.Login(this.password, this.email).then(
      () => this.router.navigate(['/index'])
    ).catch(
      (err) => console.log(err)
    ); 
  }
}
