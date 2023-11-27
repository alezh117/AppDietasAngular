import { Injectable, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import { Meal } from 'src/app/Interfaces/meal';
import { MealsDiet } from 'src/app/Interfaces/mealsDiet';
import { userStoreService } from './userStore.Service';
import { Ingredients } from 'src/app/Interfaces/ingredients';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class AdminStoreService {
  meals: Meal[] = [];
  mealsDiet: MealsDiet[] = [];
  ingredients: Ingredients[] = [];
  logUser: any;
  users$;
  dietsByUser$;

  constructor(
    private user: userStoreService,
    private rest: DataService,
    private snackbar: MatSnackBar
     ) {}

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
       duration: 3000,
    });
  }

  Login(pass: string, email: string) {
    return new Promise((resolve, reject) => {
      this.rest.Login(pass, email).subscribe({
        next: (data) => {
          this.logUser = data;
          this.user.setUser(JSON.stringify(this.logUser.user));
          this.user.setToken(this.logUser.token);
          this.openSnackBar("Sesión iniciada", "Cerrar");
          resolve(data);
        },
        error: (err) => reject(err),
      });
    });
  }

  getDietMeals(date: string) {
    this.user.getUserFromLocal();
    this.rest.GetMealsDiet(date, this.user.user.id).subscribe({
      next: (data) => {
        this.mealsDiet = data;
        console.log(this.mealsDiet);
      },
    });
  }

  createUser(name: string, email: string, pass: string) {
    this.rest.CreateUser(name, email, pass).subscribe({
      next: (data) =>{
        console.log(data);
        this.openSnackBar("Usuario Creado", "Cerrar");
      },
      error: (err) =>{
        this.openSnackBar("Error al crear usuario", "Cerrar")
        console.log(err);
      } 
    });
  }

  getMealStats(date: string) {
    this.rest.getMealStats(date, this.user.user.id).subscribe({
      next: (data) => {
        this.meals = data;
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }

  getIngredients(date: string) {
    this.rest.getIngredients(date, this.user.user.id).subscribe({
      next: (data) => {
        this.ingredients = data;
        console.log(data);
      },
    });
  }

  getUsers() {
    this.users$ = this.rest.getUsers()    
  }

  editUser(user){
    this.rest.editUser(user).subscribe({
      next:(data) =>{
        this.getUsers();
      },
      error:(err) => console.log(err)
    })

  } 

  deleteUser(user_id){
    this.rest.deleteUser(user_id).subscribe({
      next:(data) => this.getUsers(),
      error:(err) => console.log(err)  
    })
  }


  getDietsByUser(){    
    this.dietsByUser$ = this.rest.getDietsByUser();
    this.dietsByUser$.subscribe({
      next:(data)=> console.log(data)
      
    })
  }

  createUserDiet(userDiet){    
    this.rest.createUserDiet(userDiet).subscribe({  
      next:(data) =>{
        alert("Dieta asignada correctamente");
        this.getDietsByUser();
      },
      error:(err) => console.log(err)
    })
  }
}
