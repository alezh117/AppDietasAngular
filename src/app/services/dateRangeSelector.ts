import { Injectable } from "@angular/core";
import { DateRange, MatDateRangeSelectionStrategy } from "@angular/material/datepicker";


@Injectable({
    providedIn: "root"
})

export class DateRangeSelector implements MatDateRangeSelectionStrategy<string> {

    constructor(){}

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
    
