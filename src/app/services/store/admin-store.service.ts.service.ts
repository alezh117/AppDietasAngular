import { Injectable } from '@angular/core';
import { DataService } from '../api/data.service';
import { Meal } from 'src/app/Interfaces/meal';
import { MealsDiet } from 'src/app/Interfaces/mealsDiet';
import { userStoreService } from './userStore.Service';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {
  meals: Meal[] = [];

  mealsDiet: MealsDiet[] = [];


  constructor(
    private user : userStoreService,private rest: DataService) { }

  Login(pass:string, email:string){    
    return new Promise((resolve, reject) => {
      this.rest.Login(pass, email).subscribe({
        next:(data) =>{
          this.user.setToken(data);         
          resolve(data);
        },
        error:(err) => reject(err)
      })
    })
  }
  
  
  getMeals() {
    this.rest.GetMeals().subscribe({
      next:(data) => this.meals = data                
    })
  }

  getDietMeals(){
    this.rest.GetMealsDiet().subscribe({
      next:(data) =>{
        this.mealsDiet = data;
        console.log(this.mealsDiet);
      } 
    })
  }


}
