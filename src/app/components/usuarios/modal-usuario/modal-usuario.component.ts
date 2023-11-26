import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit{

  public user: any = {
    id: '' ,
    email: '',
    diet_id: '',
    dietician_id: '',
    name: '',
    password: '',
    rol: '',
  }

  constructor(   
    public storeAdmin: AdminStoreService,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}


  ngOnInit(): void {
    this.user = this.data;
  }

  editUser(){
    console.log(this.user)
    this.storeAdmin.editUser(this.user);
  }

}