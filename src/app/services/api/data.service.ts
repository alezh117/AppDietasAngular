import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal } from '../../Interfaces/meal';
import { MealsDiet } from '../../Interfaces/mealsDiet';
import { userStoreService } from '../store/userStore.Service';
import { Ingredients } from 'src/app/Interfaces/ingredients';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  apiUrl= "http://127.0.0.1:8000/api/";

  mealsUrl = this.apiUrl + "meals";
  loginUrl = this.apiUrl + "login";
  createUserUrl = this.apiUrl + "users";
  mealsDietUrl = this.apiUrl + "getMealAndDietData";
  mealStatsUrl = this.apiUrl + "getMealStats";
  ingredientsUrl = this.apiUrl + "getIngredients";

  constructor(public http : HttpClient) { }

  public GetMeals(): Observable<Meal[]>{
    const headersData = new HttpHeaders();
    return this.http.get<Meal[]>(this.mealsUrl , { headers: headersData });
  }
 
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

  public getMealStats(){
    const headersData = new HttpHeaders();
    return this.http.get<Meal[]>(this.mealStatsUrl , { headers: headersData });
  }

  public getIngredients(){
    const headersData = new HttpHeaders();
    return this.http.get<Ingredients[]>(this.ingredientsUrl , { headers: headersData })
  }

}
