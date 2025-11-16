import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'c-articulo',
  imports: [CommonModule],
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

  isToday!: boolean;

  detalleEntrega: string = "";

  ngOnInit(){
    this.isToday = this.fechaEntrega.setHours(0,0,0,0) == new Date().setHours(0,0,0,0);
    console.log(this.isToday);
    console.log(this.fechaEntrega);
  }

  /*fillDetalleEntrega(){
    if(this.precioEnvio == 0){
      this.detalleEntrega+="Envio Gratis";
    }else{
      this.detalleEntrega+=this.precioEnvio.toString;
    }
  }*/
}
