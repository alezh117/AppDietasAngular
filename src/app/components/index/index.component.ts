import {  Component, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { userStoreService } from 'src/app/services/store/userStore.Service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  displayedColumns = ["Id", "Name", "Diet_id"];

  constructor(private user: userStoreService , public data: AdminStoreService ) {
  }    

  ngOnInit(): void {
        this.data.getMeals();     
        console.log(this.user.userToken);
  } 

  datos(){   
    console.log(this.data.meals);
  }
  
}
