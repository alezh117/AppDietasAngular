import {  Component, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/Storage/admin-store.service.ts.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{  


  constructor(public data: AdminStoreService ) {
  }    

  ngOnInit(): void {
        this.data.getMeals();           
  } 

  datos(){   
    console.log(this.data.meals$);
  }
  
}
