import { Routes } from '@angular/router';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
export const routes: Routes = [
    (path:'home',component:ExibeDeputadosComponent),
    (path:'buscar',component:BuscaDeputadoComponent)


];
