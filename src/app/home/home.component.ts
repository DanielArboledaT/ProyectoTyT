import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { Administrador } from 'src/app/common/clases/administrador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin: Administrador;
  cargando: boolean;
  cargandoAdmin: boolean;

  constructor(private adminService: AdministradorService, private route: Router){

    this.admin = new Administrador();
    this.cargando = true;
    this.cargandoAdmin = true;

  }

  ngOnInit() {

    
    this.adminService.consultarAdministradorByHash(localStorage.getItem('admin'))
      .subscribe(res => {

        this.admin = res[0];
        this.adminService.setAdministrador(this.admin);

      },
      err => console.log(err),
      () => {
        this.cargandoAdmin = false;
      })

  }

  cerrarSesion(){

    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.route.navigate(['/login']);

  }

}
