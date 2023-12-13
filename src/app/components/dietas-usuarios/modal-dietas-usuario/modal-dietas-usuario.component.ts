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
    date: Date
  }

  constructor(   
    public storeData: AdminStoreService,
  ){}


  ngOnInit(): void {
    this.storeData.getUsers();
    this.storeData.getAllDiets()
  }

  createUserDiet(){
    this.userDiet.date = this.formatearFecha(this.getMondayOfWeek(this.userDiet.date)); 
    console.log(this.userDiet);
    this.storeData.createUserDiet(this.userDiet);
  }

  getMondayOfWeek(date: Date): Date {
    const day = date.getDay(); // 0 para domingo, 1 para lunes, ..., 6 para sábado
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // ajuste para iniciar desde el lunes
    return new Date(date.setDate(diff));
  }

  formatearFecha(fecha: Date): string {
    var fechaAux = new Date(fecha);
    var dia: number = fechaAux.getDate();
    var mes: number = fechaAux.getMonth() + 1;
    var año: number = fechaAux.getFullYear();
    if (dia < 10) {
      dia = ('0' + dia) as any;
    }
    if (mes < 10) {
      mes = ('0' + mes) as any;
    }
    return año + '-' + mes + '-' + dia;
  }

}
