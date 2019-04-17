import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/app/common/clases/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  ulrVentas: string;
  detalleCliente: Cliente;

  constructor(private httpClient: HttpClient) { 

    this.ulrVentas = environment.URL_VENTAS;

  }

  consultarCliente(): Observable<any>{

    const url = this.ulrVentas + '/cliente/consultar';
    return this.httpClient.get<any>(url)

  }

  guardarNuevoCliente( cliente: Cliente ): Observable<any>{

    const url = this.ulrVentas + '/cliente/guardarCliente';
    return this.httpClient.post<any>(url, cliente)

  }

  actualizarCliente( cliente: Cliente ): Observable<any>{

    const url = this.ulrVentas + '/cliente/actualizarCliente';
    return this.httpClient.put<any>(url, cliente)

  }

  cambiarEstadoCliente( cliente: Cliente ): Observable<any>{

    const url = this.ulrVentas + '/cliente/cambiarEstado';
    return this.httpClient.put<any>(url, cliente)

  }

  setDetalleCliente( cliente: Cliente ){

    this.detalleCliente = cliente;

  }

  getDetalleCliente(): Cliente{

    return this.detalleCliente;

  }


}
