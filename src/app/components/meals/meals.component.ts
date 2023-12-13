import { Component, OnInit } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { DateRangeSelector  } from 'src/app/services/dateRangeSelector';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { DateService } from 'src/app/services/auxiliar/date.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DateRangeSelector,
    },
  ],
})
export class MealsComponent implements OnInit {

  fecha = new Date();
  startDate = this.dateService.getMondayOfWeek(this.fecha);
  endDate = this.dateService.getSundayOfWeek(this.fecha);

  columns: any[] =[
    { name: 'Comida' },
    { name: 'Kcal' },
    { name: 'Proteinas' },
    { name: 'Hidratos' },
    { name: 'Grasas' }   
  ]

  constructor(
    public data: AdminStoreService,
    public dateService: DateService
    
    ) { }

ngOnInit(): void {
  this.getMealStats();    
}

getMealStats(){
  this.data.getMealStats(this.dateService.formatearFecha(this.startDate));
}

 //Funciones para obtener la fecha----------------------------------------

 getSundayOfWeek(date: Date): Date {
  const day = date.getDay(); // 0 para domingo, 1 para lunes, ..., 6 para sábado
  const diff = date.getDate() - day + 7; // ajuste para obtener el siguiente domingo
  return new Date(date.setDate(diff));
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
