import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrador } from 'src/app/common/clases/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  ulrVentas: string;
  adminConectado: Administrador;
  
  constructor(private httpClient: HttpClient) { 
    this.ulrVentas = environment.URL_VENTAS;
  }

  consultarAdministradores(): Observable<any>{

    const url = this.ulrVentas + '/administrador/consulta';
    return this.httpClient.get<any>(url);

  }

  consultarAdministradorByHash(hash: string) : Observable<any>{

    const url = this.ulrVentas + '/administrador/consultaporhash/' +hash;
    return this.httpClient.get<any>(url);

  }

  consularHistoricoAdminVendedor(id): Observable<any>{

    const url = this.ulrVentas + '/historicoAdmin/consultaVendedor/' + id;
    return this.httpClient.get<any>(url);

  }

  consularHistoricoAdminCliente(id): Observable<any>{

    const url = this.ulrVentas + '/historicoAdmin/consultaCliente/' + id;
    return this.httpClient.get<any>(url);

  }

  setAdministrador(admin : Administrador){
    this.adminConectado = admin;
  }

  getAdministrador():Administrador{
    return this.adminConectado;
  }


}
