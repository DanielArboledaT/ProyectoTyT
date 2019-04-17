import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/common/clases/usuario';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { AdministradorService } from 'src/app/common/services/administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cargando: boolean;
  user: Usuario;
  authInvalida: boolean;

  constructor( private authService: AuthService,
  private route: Router,
  private adminService: AdministradorService) { 
    this.cargando = false;
    this.user = new Usuario();
    this.authInvalida = false;
  }

  ngOnInit() {

    localStorage.removeItem('token');
    if(localStorage.getItem('token') !== null){
      this.authService.setToken(localStorage.getItem('token'));
      this.route.navigate(['home/notificaciones']);
    }

  }

  autenticar(){

    this.cargando = true;
    this.authService.login(this.user).subscribe(res => {
      console.log('respuesta', res);

      this.authService.setToken(res.dataAdmin.accessToken);
      localStorage.setItem('token', res.dataAdmin.accessToken);
      this.authService.setToken(localStorage.getItem('token'));
      localStorage.setItem('Admin', res.dataAdmin.administrador);
      this.route.navigate(['home/notificaciones']);

      }, error => {
          console.error('Error de autenticación!!!!', error.status);
          alert('Usuario o contraseña incorrectos.');
          this.cargando = false;
      });
    
  }

}
