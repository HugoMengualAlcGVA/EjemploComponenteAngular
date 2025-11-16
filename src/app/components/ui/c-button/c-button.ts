import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'button[cButton], a[cButton]',
  imports: [MatButtonModule],
  template: '<ng-content></ng-content>',
  styleUrl: '../../../scss/03_components/_c-button.scss',
  encapsulation: ViewEncapsulation.None
})
export class CButton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';

  @HostBinding('class')
  get clazz(): Record<string, boolean> {
    return {
      'boton': true,

      'boton--funcion-normal': this.funcion === 'normal',
      'boton--funcion-alternativa': this.funcion === 'alternativa',
      'boton--funcion-peligrosa': this.funcion === 'peligrosa',

    };
  }
}
