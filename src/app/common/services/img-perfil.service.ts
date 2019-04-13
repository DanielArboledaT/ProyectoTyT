import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImgPerfil } from 'src/app/common/clases/img-perfil';

@Injectable({
  providedIn: 'root'
})
export class ImgPerfilService {

  ulrVentas: string;

  constructor( private httpClient: HttpClient ) { 
    this.ulrVentas = environment.URL_VENTAS;
  }

  guardarNuevaImgPerfil( imgPerfil: ImgPerfil ): Observable<any>{

    const url = this.ulrVentas + '/guardarImg';
    return this.httpClient.post<any>(url, imgPerfil)

  }

}
