import { Component, OnInit, Injectable } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { DateRangeSelector } from 'src/app/services/auxiliar/dateRangeSelector';
import { MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';
import { DateService } from 'src/app/services/auxiliar/date.service';
import { userStoreService } from 'src/app/services/store/userStore.Service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DateRangeSelector,
    },
  ],
})
export class IndexComponent implements OnInit {
  
  //Variables--------------------------------------------------------------------------------

  days: any[] = [
    { name: 'Lunes' },
    { name: 'Martes' },
    { name: 'Miércoles' },
    { name: 'Jueves' },
    { name: 'Viernes' },
    { name: 'Sábado' },
    { name: 'Domingo' },
  ];

  times: string[] = ['Desayuno', 'Almuerzo', 'Comida', 'Merienda', 'Cena'];

  fecha = new Date();
  startDate = this.dateService.getMondayOfWeek(this.fecha);
  endDate = this.dateService.getSundayOfWeek(this.fecha);

  //--------------------------------------------------------------------------------

  constructor(
    public data: AdminStoreService,        
    public dateService : DateService,
    public user: userStoreService
    ) {}

  ngOnInit(): void {    
    this.getMeals();
    console.log(this.user.user.name)
  }

  hasMeal(day: string, time: string): boolean {  //Funcion para comprobar si el dia en cuestion tiene una comida
    return this.data.mealsDiet.some(meal => meal.day === day && meal.time === time);
  }   

  getMeals() {
    this.data.getDietMeals(this.dateService.formatearFecha(this.startDate));
  }
 
}
