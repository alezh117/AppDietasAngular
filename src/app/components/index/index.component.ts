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

  date: Date;

  constructor(private user: userStoreService , public data: AdminStoreService ) {
  }    

  ngOnInit(): void {
        this.data.getMeals();     
        // console.log(this.user.userToken);
  } 

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;    
    console.log(this.date);
  }

  datos(){   
    console.log(this.data.meals);
  }
  
}
