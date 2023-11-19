import { Component, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  columns: any[] =[
    { name: 'Comida' },
    { name: 'Kcal' },
    { name: 'Proteinas' },
    { name: 'Hidratos' },
    { name: 'Grasas' }   
  ]

  constructor(private data: AdminStoreService) { }

ngOnInit(): void {
    this.data.getMealStats();
    
}

}
