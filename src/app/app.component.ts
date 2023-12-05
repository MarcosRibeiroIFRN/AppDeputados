import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,ExibeDeputadosComponent,BuscaDeputadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-deputados';
}
