import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDto } from './dto/cliente-dto';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlCliente: string = 'https://localhost:44348/api/clientes';
  constructor(private http: HttpClient) { }

  public listarTodos(): Observable<ClienteDto[]> {
    return this.http.get(this.urlCliente)
    .pipe(
      catchError(this.handleError),
      map(this.jsonDataToClientes)
    );
  }


  private jsonDataToClientes(jsonData: any[]): ClienteDto[]{
      const clientes: ClienteDto[] = [];
      console.log(jsonData);
            jsonData.forEach(element => clientes.push(element as ClienteDto));

            console.log(clientes);
      return clientes;
  }

  private handleError(error: any): Observable<any>{
    console.log('Erro na requisição => ', error);
    return throwError(error);
  }

}
