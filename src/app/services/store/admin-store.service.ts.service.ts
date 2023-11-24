import { Injectable } from '@angular/core';
import { DataService } from '../api/data.service';
import { Meal } from 'src/app/Interfaces/meal';
import { MealsDiet } from 'src/app/Interfaces/mealsDiet';
import { userStoreService } from './userStore.Service';
import { Ingredients } from 'src/app/Interfaces/ingredients';
import { User } from 'src/app/Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {

  meals: Meal[] = [];
  mealsDiet: MealsDiet[] = []; 
  ingredients: Ingredients[] = [];
  logUser: any;


  constructor(
    private user: userStoreService,
    private rest: DataService
    ) { }

  Login(pass:string, email:string){    
    return new Promise((resolve, reject) => {
      this.rest.Login(pass, email).subscribe({
        next:(data) =>{ 
          this.logUser = data;  
          console.log(this.logUser);
          this.user.setToken(this.logUser.token);   
          resolve(data);
        },
        error:(err) => reject(err)
      })
    })
  }      

  getDietMeals(date: string){
    this.rest.GetMealsDiet(date, this.logUser.user.id).subscribe({
      next:(data) =>{
        this.mealsDiet = data;          
        console.log(this.mealsDiet);
      } 
    })
  }

  createUser(name:string ,email: string, pass:string){
    this.rest.CreateUser(name, email, pass).subscribe({
      next:(data) => console.log(data),
      error:(err) => console.log(err)
    })
  }

  getMealStats(){
    this.rest.getMealStats().subscribe({
      next:(data) => {
        this.meals = data;
        console.log(data);
      },
      error:(err) => console.log(err)
    })
  }

  getIngredients(){
    this.rest.getIngredients().subscribe({
      next:(data) => {
        this.ingredients = data;
        console.log(data);
      }
    })
  }


}
