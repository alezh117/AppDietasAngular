import {  Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { userStoreService } from 'src/app/services/store/userStore.Service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{  

  days: any[] = [
    {name: 'Lunes'},
    {name: 'Martes'},
    {name: 'Miercoles'},
    {name: 'Jueves'},
    {name: 'Viernes'},
    {name: 'Sabado'},
    {name: 'Domingo'},
  ]

  startDate: Date;

  constructor(private user: userStoreService , public data: AdminStoreService ) {
  }    

  ngOnInit(): void {
        this.data.getMeals();     
        // console.log(this.user.userToken);
  } 

  addEvent() {
    console.log(this.startDate.getDay());     
  }

  datos(){   
    console.log(this.data.meals);
  }
  
}
