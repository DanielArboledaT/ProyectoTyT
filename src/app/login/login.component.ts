import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/common/services/login.service';
import { Usuario } from 'src/app/common/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cargando: boolean;
  user: Usuario;
  authInvalida: boolean;

  constructor( private loginService: LoginService,
              private route: Router ) { 
    this.cargando = false;
    this.user = new Usuario();
    this.authInvalida = false;
  }

  ngOnInit() {
  }

  autenticar(){

    let valido = this.loginService.autenticar(this.user);

    if( valido ){
      this.route.navigate(['/home']);
    }else{
      this.authInvalida = true;
    }
    
  }

}
