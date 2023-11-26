import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

@Component({
  selector: 'app-modal-dietas-usuario',
  templateUrl: './modal-dietas-usuario.component.html',
  styleUrls: ['./modal-dietas-usuario.component.css']
})
export class ModalDietasUsuarioComponent implements OnInit {

  public userDiet: any = {
    user_id: '' ,          
    diet_id: '',
  }

  constructor(   
    public storeAdmin: AdminStoreService,
  ){}


  ngOnInit(): void {
    this.storeAdmin.getUsers();
  }

  createUserDiet(){   
    this.storeAdmin.createUserDiet(this.userDiet);
  }

}
