import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DateService{

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