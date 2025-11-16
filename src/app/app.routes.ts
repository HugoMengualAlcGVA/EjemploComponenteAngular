import { Routes } from '@angular/router';
import { Articulos } from './components/pages/articulos/articulos';
import { Inicio } from './components/pages/inicio/inicio';

export const routes: Routes = [
    {path: '', component:Inicio},
    {path: 'inicio', component:Inicio},
    { path: 'articulos', component: Articulos},
];
