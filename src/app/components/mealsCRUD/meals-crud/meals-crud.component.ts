import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

@Component({
  selector: 'app-meals-crud',
  templateUrl: './meals-crud.component.html',
  styleUrls: ['./meals-crud.component.css']
})
export class MealsCRUDComponent implements OnInit { 

  createMealForm = this.formBuilder.group({
    name: ['', Validators.required],
    kcal: ['', Validators.required],
    grasas: ['', Validators.required],
    hidratos: ['', Validators.required],
    proteinas: ['', Validators.required]
  });

  dataSource: MatTableDataSource<any>;  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = ['name', 'kcal', 'proteinas', 'hidratos', 'grasas'];

  constructor(
    private formBuilder : FormBuilder,
    public dataStore: AdminStoreService,
  ){}

  async ngOnInit(): Promise<void> {
    try {
      await this.dataStore.getAllMeals()
      this.dataSource = new MatTableDataSource(this.dataStore.mealsAll)
      this.dataSource.paginator = this.paginator;      
    } catch (error) {
      console.log(error);      
    }    
  }

  createMeal(){
    let mealData = (this.createMealForm.value);        
    this.dataStore.createMeal(mealData);    
  }

  arrayFilter(event){    
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource = new MatTableDataSource(this.dataStore.mealsAll.filter((match) => match.name.toLowerCase().includes(filterValue.toLowerCase())));    
    this.dataSource.paginator = this.paginator;   
  }


}
