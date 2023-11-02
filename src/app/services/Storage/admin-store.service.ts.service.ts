import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Meal } from 'src/app/Interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {
  meals: Meal[] = []

  constructor(private rest: DataService) { }

  getMeals() {
    this.rest.GetMeals().subscribe({
      next:(data) => this.meals = data                
    })
  }
}
