import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Cardapio } from '../model/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  lancamentoUrl = 'http://localhost:8080/cardapio';

  constructor(private http: HttpClient) { }

  buscaCardapio(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(this.lancamentoUrl).pipe();
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
