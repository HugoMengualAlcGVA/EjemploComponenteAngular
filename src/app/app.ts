import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CButton } from "./components/ui/c-button/c-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CButton, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EjemploComponenteAngular');
}
