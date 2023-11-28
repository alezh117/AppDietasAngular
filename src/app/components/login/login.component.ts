import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = ""; 
  name: string = "";

  constructor(private router: Router ,private data: AdminStoreService) { }

  onSubmit(){
    if(this.validate(this.password, this.email))      
    
       
    this.data.Login(this.password, this.email)
      .then( () => this.router.navigate(['/index']))
      .catch( (err) => console.log(err)); 
  }

  validarFormatoEmail(email){
    const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return patternEmail.test(email);
  }

  validate(password, email){
    if(email === ''){ return  this.data.openSnackBar("El email es obligatorio", "Cerrar");}
    if(password === ''){ return  this.data.openSnackBar("La contraseña es obligatoria", "Cerrar");}
    if ( !this.validarFormatoEmail(email) ) { return this.data.openSnackBar('Email con formato incorrecto', "Cerrar");}     
    return true;
  }

  createUser(){
    this.data.createUser(this.name,this.email, this.password);    
  }
}
