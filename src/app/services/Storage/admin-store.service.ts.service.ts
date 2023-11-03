import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Meal } from 'src/app/Interfaces/meal';
import { TokenStoreService } from './token-store.service';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {
  meals: Meal[] = [];
  userToken:string = "";

  constructor(private token : TokenStoreService,private rest: DataService) { }

  Login(pass:string, email:string){
    return new Promise((resolve, reject) => {
      this.rest.Login(pass, email).subscribe({
        next:(data) =>{
          this.StoreToken(data);
          console.log(this.userToken);
          resolve(data);
        },
        error:(err) => reject(err)
      })
    })
  }

  StoreToken(data: string){
    this.userToken = data;
    this.token.token(data);
  }

  
  
  getMeals() {
    this.rest.GetMeals().subscribe({
      next:(data) => this.meals = data                
    })
  }


}
