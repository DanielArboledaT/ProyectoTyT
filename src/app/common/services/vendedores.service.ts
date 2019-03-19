import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  ulrVentas: string;

  constructor( private httpClient: HttpClient) {
    this.ulrVentas = environment.URL_VENTAS;
  }

  consultarVendedores() : Observable<any>{

    const url = this.ulrVentas + '/consulta';
    return this.httpClient.get<any>(url);
  }

}
