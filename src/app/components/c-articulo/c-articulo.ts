import { Component, HostBinding, Input } from '@angular/core';
import { DatePipe, CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'c-articulo',
  imports: [DatePipe, CurrencyPipe, CommonModule],
  templateUrl: './c-articulo.html',
  styleUrl: './c-articulo.scss',
})
export class CArticulo {
  @Input() urlImagen: String = "";
  @Input() nombre: String = "";
  @Input() precioActual: number = 0;
  @Input() precioAnterior: number = 0;
  @Input() valoracion: number = 0.0;
  @Input() numeroOpiniones: number = 0.0;
  @Input() fechaEntrega: Date = new Date();
  @Input() precioEnvio: number = 0;
  @Input() otrosEnvios: boolean = false;
}
