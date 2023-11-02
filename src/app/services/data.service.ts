import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../Interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  apiUrl= "http://127.0.0.1:8000/api/";

  mealsUrl = this.apiUrl + "meals";

  constructor(public http : HttpClient) { }


  public GetMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>(this.mealsUrl);
  }

}
