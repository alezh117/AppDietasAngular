import { Component, OnInit, Injectable } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';

@Injectable()
export class FiveDayRangeSelectionStrategy
  implements MatDateRangeSelectionStrategy<string>
{
  constructor() {}

  selectionFinished(date: string | null): DateRange<string> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: string | null): DateRange<string> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: string | null): DateRange<any> {
    if (date) {
      const d = new Date(date);
      const day = d.getDay(); // día de la semana del 0 al 6
      const monthDay = d.getDate(); // día del mes del 1 al 30/31
      const startDay = monthDay - day + (day === 0 ? -6 : 1); // ajuste para iniciar desde el lunes
      const start = new Date(d.getFullYear(), d.getMonth(), startDay); //le damos contexto de año y mes para que no haya problemas
      const end = new Date(d.getFullYear(), d.getMonth(), startDay + 6);
      return new DateRange<any>(start, end);
    }
    return new DateRange<string>(null, null);
  }
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
  ],
})
export class IndexComponent implements OnInit {
  
  //Variables--------------------------------------------------------------------------------

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

  fecha = new Date();
  startDate = this.getMondayOfWeek(this.fecha);
  endDate = this.getSundayOfWeek(this.fecha);

  //--------------------------------------------------------------------------------

  constructor(public data: AdminStoreService) {}

  ngOnInit(): void {
    this.data.getDietMeals(this.formatearFecha(this.startDate));
  }

  getMeals() {
    this.data.getDietMeals(this.formatearFecha(this.startDate));
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

  //--------------------------------------------------------------//
}
