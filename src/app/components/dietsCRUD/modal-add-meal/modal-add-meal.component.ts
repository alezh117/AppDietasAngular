import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

@Component({
  selector: 'app-modal-add-meal',
  templateUrl: './modal-add-meal.component.html',
  styleUrls: ['./modal-add-meal.component.css']
})
export class ModalAddMealComponent implements OnInit {

  selectedMeal: any = '';
  dietId;
  day;
  time;

  constructor(
    public storeData: AdminStoreService,
    @Inject(MAT_DIALOG_DATA) public data: { dietId, day, time }
    ){
      this.dietId = data.dietId;
      this.day = data.day;
      this.time = data.time;   
      console.log(data)
    }


  ngOnInit(){
    this.storeData.getAllMeals()  
  }

  addMealToDiet(){   
    this.storeData.addMealToDiet(this.dietId, this.selectedMeal.id, this.day, this.time);
  }





}
