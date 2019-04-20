import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendedores } from 'src/app/common/clases/vendedores';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  ulrVentas: string;
  detalleVendedor: Vendedores;

  //variable en la cual se guarda el comentario proveniente del modal de confirmación cuando es cambiar estado
  comentario: string;

  constructor( private httpClient: HttpClient) {
    this.ulrVentas = environment.URL_VENTAS;
  }

  consultarVendedores() : Observable<any>{

    const url = this.ulrVentas + '/vendedor/consulta';
    return this.httpClient.get<any>(url);
  }

  guardarNuevoVendedor( vendedor: Vendedores ): Observable<any>{

    const url = this.ulrVentas + '/vendedor/guardar';
    return this.httpClient.post<any>(url, vendedor)

  }

  actualizarVendedor( vendedor: Vendedores ){

    const url = this.ulrVentas + '/vendedor/actualizar';
    return this.httpClient.put<any>(url, vendedor)

  }

  cambiarEstadoVendedor( vendedor: Vendedores ){

    const url = this.ulrVentas + '/vendedor/cambiarEstado';
    return this.httpClient.put<any>(url, vendedor)

  }

  setDetalleVendedor( vendedor: Vendedores ){
    this.detalleVendedor = vendedor;
  }

  getDetalleVendedor(): Vendedores{
    return this.detalleVendedor;
  }

  setComentario( coment: string ){
    this.comentario = coment;
  }

  getComentario():string{
    return this.comentario;
  }


}
