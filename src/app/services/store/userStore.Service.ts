import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userStoreService {

  constructor() { }

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
    
    // Validamos si usertoken es undefined
    if(this.validate(this.userToken) ){ return this.userToken ;}

    // UserToken es undefined asi que lo buscamos en localstorage
    const userTokenStorage = localStorage.getItem('token');

    if( this.validate(userTokenStorage) ){
      // Hemos encontrado el token y se lo damos a usertoken
      this.userToken = userTokenStorage;
      // y de paso se lo devolvemos a la funcion para quien nos lo pide.
      return userTokenStorage;
    }

    return undefined;
    
  }

  setToken(token: string){
    localStorage.setItem('token',token);
    this.userToken = token;
  }

  ensureToken(){
    if ( null === this.userToken ){ return false; }
    if ( undefined === this.userToken ){ return false; }
    if ( '' === this.userToken ){ return false; }

    return true;
  }


}
