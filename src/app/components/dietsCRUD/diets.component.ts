import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { ModalAddMealComponent } from './modal-add-meal/modal-add-meal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsCRUDComponent implements OnInit {


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

  dietForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  }); 
    
  selectedDiet: any;
  dietListFiltered = [];

  constructor(
    public storeData: AdminStoreService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ){
    
  }

  async ngOnInit(){
   await this.storeData.getAllDiets();   
   this.dietListFiltered = this.storeData.diets;
   console.log(this.storeData.diets);   
  } 

  createDiet() {        
    this.storeData.createDiet(this.dietForm.value);
  }  

  onDietChange() {      
    console.log(this.selectedDiet);
    this.storeData.getDiet(this.selectedDiet);
  }

  hasMeal(day: string, time: string): boolean {
    return this.storeData.dietMeals.some(meal => meal.day === day && meal.time === time);
  }

  addMeal(day, time){          
    const dialogRef = this.dialog.open(ModalAddMealComponent , { data: { dietId: this.selectedDiet, day: day, time: time } });

    dialogRef.afterClosed().subscribe({
      next: (data) => console.log(this.selectedDiet)
    });
  } 

  arrayFilter(array , event: Event){
    console.log(this.selectedDiet);
    
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dietListFiltered = this.storeData.diets.filter((match) => match.name.toLowerCase().includes(filterValue.toLowerCase()));    
  }

  


}
