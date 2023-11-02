import { Injectable, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService implements OnInit {

  usuarios$: Observable<any> | undefined;

  constructor(private rest: DataService) { }

  ngOnInit(){
    this.getMeals()
  }

  getMeals(){
   this.usuarios$ =  this.rest.GetMeals();
  }
}
