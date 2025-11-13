import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CArticulo } from "./components/c-articulo/c-articulo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CArticulo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EjemploComponenteAngular');

  fechaEntrega1: Date = new Date('2025-12-23');
  fechaEntrega2: Date = new Date();
  fechaEntrega3: Date = new Date('2025-6-14');
  
}
