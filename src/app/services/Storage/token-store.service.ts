import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userStoreService {

  constructor() { }

  userToken: string;

  token(usertoken:string){
    this.userToken = usertoken;
  }


}
