import { Component } from '@angular/core';
import { CArticulo } from "../../ui/c-articulo/c-articulo";

@Component({
  selector: 'app-articulos',
  imports: [CArticulo],
  templateUrl: './articulos.html',
  styleUrl: './articulos.scss',
})
export class Articulos {
  fechaEntrega1: Date = new Date('2025-12-23');
  fechaEntrega2: Date = new Date();
  fechaEntrega3: Date = new Date('2025-6-14');
}
