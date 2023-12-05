import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private URL = 'https://dadosabertos.camara.leg.br/api/v2'
  constructor(private http :HttpClient) { }
  obterTodos(): Observable<any>{
    return this.http.get(`${this.URL}/deputados?ordem=ASC&ordenarPor=nome`)

      
    
  }
}
