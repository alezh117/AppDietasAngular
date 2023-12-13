import { Component, OnInit } from '@angular/core';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { DateService } from 'src/app/services/auxiliar/date.service';
import { DateRangeSelector } from 'src/app/services/auxiliar/dateRangeSelector';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DateRangeSelector,
    },
  ],
})
export class ListaCompraComponent implements OnInit {

  fecha = new Date();
  startDate = this.dateService.getMondayOfWeek(this.fecha);
  endDate = this.dateService.getSundayOfWeek(this.fecha);
  
  columns: any[] = [
    { name: 'Ingrediente' },
    { name: 'Cantidad' },
    { name: 'Comida' },    
  ]

  constructor(
    public data: AdminStoreService,    
    public dateService: DateService
  ){}

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(){
    this.data.getIngredients(this.dateService.formatearFecha(this.startDate))
  }
 
}
