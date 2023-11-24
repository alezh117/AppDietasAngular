import { Injectable } from '@angular/core';
import { User } from 'src/app/Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class userStoreService {

  constructor() { }

  public user;

  public userToken: string;

  token(usertoken:string){
    this.userToken = usertoken;
  }

  private validate(value){
    if ( value === null ){ return false; }
    if ( value === undefined ){ return false; }
    if ( value === '' ){ return false; }

    return true;
  }

  public getToken(){    
    if(this.validate(this.userToken) ){ return this.userToken ;}  //Validamos si usertoken es undefined
    const userTokenStorage = localStorage.getItem('token');       // UserToken es undefined asi que lo buscamos en localstorage
    if( this.validate(userTokenStorage) ){                        // Hemos encontrado el token, lo validamos y se lo damos a this.usertoken
      this.userToken = userTokenStorage;                          // y se lo devolvemos a la funcion para quien nos lo pide.
      return userTokenStorage;
    }

    return undefined;    
  }

  public getUserFromLocal(){    
    const userFromStorage = localStorage.getItem('user');    
    if (userFromStorage) {
      this.user = JSON.parse(userFromStorage);      
    } else {
      console.error('No se encontró el usuario en localStorage.');
    }
      
  }

  setToken(token: string){
    localStorage.setItem('token',token);
    this.userToken = token;
  }

  setUser(user){
    localStorage.setItem('user', user);    
  }

  ensureToken(){
    if ( null === this.userToken ){ return false; }
    if ( undefined === this.userToken ){ return false; }
    if ( '' === this.userToken ){ return false; }

    return true;
  }


}
