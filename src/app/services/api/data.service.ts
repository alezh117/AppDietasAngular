import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal } from '../../Interfaces/meal';
import { MealsDiet } from '../../Interfaces/mealsDiet';
import { Ingredients } from 'src/app/Interfaces/ingredients';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  apiUrl= "http://127.0.0.1:8000/api/";

  loginUrl = this.apiUrl + "login";
  createUserUrl = this.apiUrl + "users";
  mealsDietUrl = this.apiUrl + "getMealAndDietData";
  mealStatsUrl = this.apiUrl + "getMealStats";
  ingredientsUrl = this.apiUrl + "getIngredients";
  usersUrl = this.apiUrl + "users";
  updateUserUrl = this.apiUrl + "updateUser";
  dietsByUserUrl = this.apiUrl + "clientDiet";
  deleteUserUrl = this.apiUrl + "deleteUser";
  getAllMealsUrl = this.apiUrl + "getAllMeals";
  createDietUrl = this.apiUrl + "createDiet";
  getAllDietsUrl = this.apiUrl + "diets";
  getDietByIdUrl = this.apiUrl + "diets";
  addMealToDietUrl = this.apiUrl + "addMealtoDiet";

  constructor(public http : HttpClient) { }
  
 
  public Login(pass:string, email:string){  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);

    return this.http.post(this.loginUrl, formData);
  }

  public GetMealsDiet(date: string, user_id): Observable<MealsDiet[]> {    
    const headersData = new HttpHeaders({
        'User_id' : user_id,
        'Fecha': date, 
    });  
    return this.http.get<MealsDiet[]>(this.mealsDietUrl, { headers: headersData }); 
  }

  public CreateUser(name:string ,email:string, pass:string){
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);
    formData.append('name', name);

    return this.http.post(this.createUserUrl, formData)
  }

  public getMealStats(date: string, user_id){
    const headersData = new HttpHeaders({
      'User_id' : user_id,
      'Fecha': date, 
  }); 
    return this.http.get<Meal[]>(this.mealStatsUrl , { headers: headersData });
  }

  public getIngredients(date: string, user_id){
    const headersData = new HttpHeaders({
      'User_id' : user_id,
      'Fecha': date, 
  }); 
    return this.http.get<Ingredients[]>(this.ingredientsUrl , { headers: headersData })
  }

  public getUsers(){
    const headersData = new HttpHeaders();
    return this.http.get<any>(this.usersUrl , { headers: headersData })
  }

  public editUser(user){
    const headersData = new HttpHeaders();

    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('name', user.name);    
    formData.append('rol', user.rol)
    formData.append('id', user.id);
    formData.append('diet_id', user.diet_id);
    formData.append('user_id', user.user_id);
    formData.append('dietician_id', user.dietician_id)    

    return this.http.post(this.updateUserUrl, formData , { headers: headersData })
  }

  public deleteUser(user_id){
    return this.http.delete(`${this.apiUrl}users/${user_id}`)
  }

  public getDietsByUser(){
    const headersData = new HttpHeaders();

    return this.http.get(this.dietsByUserUrl, { headers: headersData })
  }

  createUserDiet(userDiet){
    const headersData = new HttpHeaders();  

    const formData = new FormData();
    formData.append('user_id', userDiet.user_id);
    formData.append('diet_id', userDiet.diet_id);   
    formData.append('fecha', userDiet.date);     

    return this.http.post(this.dietsByUserUrl, formData , { headers: headersData })    
  }

  getAllMeals(){
    const headersData = new HttpHeaders();

    return this.http.get(this.getAllMealsUrl, { headers: headersData } )
  }

  createDiet(dietData){
    const headersData = new HttpHeaders();

    const formData = new FormData();
    formData.append('name', dietData.name)
    formData.append('description', dietData.description)

    return this.http.post(this.createDietUrl, formData , { headers: headersData })    
  }

  getAllDiets(){
    const headersData = new HttpHeaders();

    return this.http.get<any[]>(this.getAllDietsUrl, { headers: headersData })    
  }

  getDiet(dietId){
    let url = this.getDietByIdUrl + '/' + dietId;    
    const headersData = new HttpHeaders();  

    return this.http.get<any[]>(url, { headers: headersData })    
  }

  addMealToDiet(diet_id, meal_id, day, time  ){
    const headersData = new HttpHeaders();  

    const formData = new FormData();
    formData.append('diet_id', diet_id);
    formData.append('meal_id', meal_id);
    formData.append('time', time);
    formData.append('day', day);    

    return this.http.post(this.addMealToDietUrl, formData, { headers: headersData })    
  }
}
