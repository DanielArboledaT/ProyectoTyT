import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  ulrVentas: string;
  
  constructor(private httpClient: HttpClient) { 
    this.ulrVentas = environment.URL_VENTAS;
  }


  consultarAdministrador(hash: string) : Observable<any>{

    const url = this.ulrVentas + '/administrador/consulta';
    return this.httpClient.get<any>(url);

  }

}
