import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/common/clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  autenticar( user: Usuario ) {

    if(user.user === 'daniel' && user.password === "1234"){
      return true;
    }else{
      return false;
    }

  }
}
