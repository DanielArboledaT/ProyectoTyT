import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthResponse} from '../clases/authResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService {

  private urlVentas: string;
  private token: string;
  private helper = new JwtHelperService();

  constructor(private httpClient: HttpClient, private router: Router) { 

    this.urlVentas = environment.URL_VENTAS;

  }

  login(autenticacion: Usuario): Observable<AuthResponse> {

    const url = this.urlVentas + '/login';
    return this.httpClient.post<AuthResponse>(url, autenticacion);

  }

  public setToken(token: string) {

    this.token = token;

  }

  public getToken() {
    return this.token;
  }

  public estokenValido(): boolean {
    const token = this.getToken();

    return this.helper.isTokenExpired(token);


  } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (typeof this.token !== 'undefined') {
        // logged in so return true
        return true;
    }



    // not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }

}
