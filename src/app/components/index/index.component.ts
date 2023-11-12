import { Component, OnInit, Injectable } from '@angular/core';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { userStoreService } from 'src/app/services/store/userStore.Service';

import { DateAdapter } from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';

@Injectable()
export class FiveDayRangeSelectionStrategy
  implements MatDateRangeSelectionStrategy<string>
{
  constructor(private _dateAdapter: DateAdapter<string>) {}

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

      const start = new Date(d.getFullYear(), d.getMonth(), startDay);
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
  days: any[] = [
    { name: 'Lunes' },
    { name: 'Martes' },
    { name: 'Miercoles' },
    { name: 'Jueves' },
    { name: 'Viernes' },
    { name: 'Sábado' },
    { name: 'Domingo' },
  ];  

  constructor(private user: userStoreService, public data: AdminStoreService) {}

  ngOnInit(): void {
    this.data.getDietMeals();    
  }

  getTestData(){
   
  }

  addEvent() {}
}
