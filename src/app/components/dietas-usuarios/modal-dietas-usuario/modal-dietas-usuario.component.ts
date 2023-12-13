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

  constructor(   
    public storeData: AdminStoreService,
    public dateService : DateService
  ){}

  ngOnInit(): void {
    this.storeData.getUsers();
    this.storeData.getAllDiets()
  }
  createUserDiet(){
    this.userDiet.date = this.dateService.formatearFecha(this.dateService.getMondayOfWeek(this.userDiet.date)); 
    console.log(this.userDiet);
    this.storeData.createUserDiet(this.userDiet);
  } 

}
