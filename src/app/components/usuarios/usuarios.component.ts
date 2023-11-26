import { Component, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  headers: any[] = [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Email' },
    { name: 'Dietista' },
    { name: 'Rol' },  
    
  ]

  constructor(
    public data: AdminStoreService,
    public dialog : MatDialog,
  ){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.data.getUsers()
  }

  deleteUser(user_id){
    this.data.deleteUser(user_id);
  }

  editUserModal(user){    
    this.dialog.open(ModalUsuarioComponent, { data: user });    
  }
  
}
