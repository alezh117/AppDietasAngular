import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {

  constructor() { }

  userToken: string;

  token(usertoken:string){
    this.userToken = usertoken;
  }


}
