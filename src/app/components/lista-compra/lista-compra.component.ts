import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {

  columns: any[] = [
    { name: 'Nombre' },
    { name: 'Cantidad' },
    { name: 'Unidad de Medida' },
    { name: 'Precio Estimado' },
    { name: 'Notas Especiales' },
  ]

}
