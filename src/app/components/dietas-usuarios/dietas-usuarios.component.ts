import { Component, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDietasUsuarioComponent } from './modal-dietas-usuario/modal-dietas-usuario.component';

@Component({
  selector: 'app-dietas-usuarios',
  templateUrl: './dietas-usuarios.component.html',
  styleUrls: ['./dietas-usuarios.component.css']
})
export class DietasUsuariosComponent implements OnInit {

  headers: any[] =[
    {name: 'User'},
    {name: 'Name'},
    {name: 'Email'},
    {name: 'Diet'},
    {name: 'Fecha'}
  ]
  constructor(
    public storeData: AdminStoreService,
    public dialog : MatDialog,
  ){}

  ngOnInit(): void {    
      this.getDietsByUser()    
  }

  createUserDiet(){
    this.dialog.open(ModalDietasUsuarioComponent);
  }

  getDietsByUser(){ 
    this.storeData.getDietsByUser();
  }  

}
