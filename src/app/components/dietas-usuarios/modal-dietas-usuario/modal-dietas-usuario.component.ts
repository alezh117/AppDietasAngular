import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { DateService } from 'src/app/services/auxiliar/date.service';

@Component({
  selector: 'app-modal-dietas-usuario',
  templateUrl: './modal-dietas-usuario.component.html',
  styleUrls: ['./modal-dietas-usuario.component.css']
})
export class ModalDietasUsuarioComponent implements OnInit {

  
  public userDiet: any = {
    user_id: '' ,          
    diet_id: '',
    date: Date
  } 

  dietListFiltered = []
  userListFiltered = [];

  constructor(   
    public storeData: AdminStoreService,
    public dateService : DateService
  ){}

  async ngOnInit(): Promise<void> {
    try {
      await this.storeData.getUsers();
      await this.storeData.getAllDiets()
      this.arraysFiltered();     
    } catch (error) {
      console.log(error)
    }    
  }

  arraysFiltered(){
    this.userListFiltered = this.storeData.users      
    this.dietListFiltered = this.storeData.diets;
  }

  async createUserDiet(){    
    this.userDiet.date = this.dateService.formatearFecha(this.dateService.getMondayOfWeek(this.userDiet.date));     
    try {
      await this.storeData.createUserDiet(this.userDiet);
      this.emptyUserDiet();
      
    } catch (error) {
      this.emptyUserDiet();
      console.log(error)
      alert("Insercion duplicada...")
    }        
  } 

  emptyUserDiet(){
    this.userDiet.user_id =  '';
    this.userDiet.diet_id =  '';
    this.userDiet.date =  '';
  }
  
  arrayFilter(array , event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    if(array == this.userListFiltered){
      this.userListFiltered = this.storeData.users.filter((match) => match.name.toLowerCase().includes(filterValue.toLowerCase()));
    }else{
      this.dietListFiltered = this.storeData.diets.filter((match) => match.name.toLowerCase().includes(filterValue.toLowerCase()));
    }   
  }

}
