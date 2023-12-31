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
  diets: any[] = [];
  dietMeals: any [] = [];  
  users: any[] = [];
  mealsAll: any[] = [];

  users$;
  logUser: any;  
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
        error: (err) =>{
          this.openSnackBar("Credenciales incorrectas", "Cerrar");          
          reject(err);
        }
      });
    });
  }

  getDietMeals(date: string) {
    this.user.getUserFromLocal();
    this.rest.GetMealsDiet(date, this.user.user.id).subscribe({
      next: (data) => {
        this.mealsDiet = data;
        this.openSnackBar("Dietas actualizadas", "Cerrar");
      },
      error:(err) => {
        ////console.log(err);
        this.openSnackBar("Error al actualizadar", "Cerrar");
      }
    });
  }

  createUser(name: string, email: string, pass: string) {
    this.rest.CreateUser(name, email, pass).subscribe({
      next: (data) =>{
        //console.log(data);
        this.openSnackBar("Usuario Creado", "Cerrar");
      },
      error: (err) =>{
        this.openSnackBar("Error al crear usuario", "Cerrar")
        //console.log(err);
      } 
    });
  }

  getMealStats(date: string) {
    this.rest.getMealStats(date, this.user.user.id).subscribe({
      next: (data) => {
        this.meals = data;
        this.openSnackBar("Comidas actualizadas", "Cerrar");
      },
      error: (err) =>{
        this.openSnackBar("Error al actualizadar", "Cerrar");
        //console.log(err);
      } 
    });
  }

  getAllMeals(){
    return new Promise((resolve, reject) => {
      this.rest.getAllMeals().subscribe({
        next:(data) =>{       
          this.mealsAll = data
          console.log(this.mealsAll);
          resolve(data)
        },
        error:(err) => {
          reject()     
        }
      })
    })
         
  }

  getIngredients(date: string) {
    this.rest.getIngredients(date, this.user.user.id).subscribe({
      next: (data) => {
        this.ingredients = data;
        this.openSnackBar("Ingredientes actualizados", "Cerrar");
      },
      error: (err) =>{
        this.openSnackBar("Error al actualizadar", "Cerrar");
        //console.log(err);
      } 
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.rest.getUsers().subscribe({
        next:(data) =>{
          this.users = data
          this.openSnackBar("Usuarios actualizados", "Cerrar");    
          resolve(data);
        },
        error:(err) => {
          console.log(err)
        }
      })
      
    })    
       
  }

  editUser(user){
    this.rest.editUser(user).subscribe({
      next:(data) =>{
        this.getUsers();
        this.openSnackBar("Usuario editado correctamente", "Cerrar");
      },
      error:(err) => this.openSnackBar("Error al editar el usuario", "Cerrar")
    })

  } 

  deleteUser(user_id){
    this.rest.deleteUser(user_id).subscribe({
      next:(data) =>{
        this.getUsers();
        this.openSnackBar("Usuario borrado correctamente", "Cerrar");
      },
      error:(err) => {
        this.openSnackBar("Error al borrar el usuario", "Cerrar");
      }
    })
  }

  getDietsByUser(){    
    this.dietsByUser$ = this.rest.getDietsByUser();
    this.dietsByUser$.subscribe({
      next:(data)=>{
        // //console.log(data);
        this.openSnackBar("Dietas atualizadas", "Cerrar");
      }       
    })
  }

  createUserDiet(userDiet){   
    return new Promise<void>((resolve, reject)=> {
      this.rest.createUserDiet(userDiet).subscribe({  
        next:() =>{
          this.openSnackBar("Dieta asignada correctamente", "Cerrar");
          this.getDietsByUser();
          resolve();
        },
        error:(err) =>{
          this.openSnackBar("Error al asignar dieta", "Cerrar");
          //console.log(err)
          reject(err)
        } 
      })
    }) 
    
  }

  createDiet(dietData){
    this.rest.createDiet(dietData).subscribe({
      next:(data) => {
        //console.log(data);
        this.getAllDiets()
        this.openSnackBar("Dieta creada correctamente", "Cerrar");
      },
      error:(err) => {
        //console.log(err);
        this.openSnackBar("Error al crear la dieta", "Cerrar");
      }
    })

  }

  getAllDiets(){
    return new Promise((resolve, reject) => {
      this.rest.getAllDiets().subscribe({
        next:(data) =>{        
          this.diets = data;
          resolve(data)
        },
        error:(err) => {
          //console.log(err)
          reject(err)
        }
      })
    })
    
  }

  getDiet(dietId){
    this.rest.getDiet(dietId).subscribe({
      next:(data) => {
        this.dietMeals = data;
        //console.log(data);
      },
      error:(err) => {
        //console.log(err);
      }
    })

  }

  addMealToDiet(diet_id, meal_id, day, time ){        
    this.rest.addMealToDiet(diet_id, meal_id, day, time ).subscribe({
      next:(data) => {
        //console.log(data)      
        this.getDiet(diet_id);
      },
      error:(err) => {
        //console.log(err)
      }

    })
  }

  createMeal(mealData){
    this.rest.createMeal(mealData).subscribe({
      next:(data) => {
        console.log(data)
      }
      ,error:(err)=> {
        console.log(err);
        
      }
    })
  }
}
