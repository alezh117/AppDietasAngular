import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {
  meals$: Observable<any> | undefined;

  constructor(private rest: DataService) { }

  getMeals() {
    this.meals$ = this.rest.GetMeals()
  }
}
