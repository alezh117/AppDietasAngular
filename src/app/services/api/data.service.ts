import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal } from '../../Interfaces/meal';
import { MealsDiet } from '../../Interfaces/mealsDiet';
import { userStoreService } from '../store/userStore.Service';


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

  constructor(private user : userStoreService ,public http : HttpClient) { }

  public GetMeals(): Observable<Meal[]>{
    const headersData = new HttpHeaders();
    return this.http.get<Meal[]>(this.mealsUrl , { headers: headersData });
  }
 
  public Login(pass:string, email:string){  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);

    return this.http.post(this.loginUrl, formData).pipe(map((data:any) => data.token));
  }

  public GetMealsDiet(date: string): Observable<MealsDiet[]> {    
    const headersData = new HttpHeaders({
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

}
