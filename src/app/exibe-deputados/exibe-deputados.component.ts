import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DeputadoService } from '../deputado.service';
import { Depudato } from '../deputado';

@Component({
  selector: 'app-exibe-deputados',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-deputados.component.html',
  styleUrl: './exibe-deputados.component.css',
  providers:[DeputadoService]
})
export class ExibeDeputadosComponent {
  deputados:Depudato[]=[]
  constructor (private ds: DeputadoService){
    ds.obterTodos().subscribe(resposta=>{
     this.deputados=resposta.dados
    })
  }
}
