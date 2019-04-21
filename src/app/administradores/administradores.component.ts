import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/common/clases/administrador';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  cargandoadmins: boolean;
  esDueno: boolean;
  columnsListaAdmins: string[] = [ 
    'primerNombre', 
    'segundoNombre',
    'primerApellido', 
    'segundoApellido', 
    'identificacion',
    'direccion',
    'telefono',
    'ciudad',
    'departamento',
    'fechaIngreso',
    'Acciones'
  ]
  listadAdmis: Administrador[]; 

  constructor(private adminService: AdministradorService,
    private route: Router) { 

    this.cargandoadmins = true;
    this.esDueno = false;

  }

  ngOnInit() {
    
    this.adminService.consultarAdministradores().subscribe(res => {
      this.esDueno = this.adminService.getAdministrador().dueño;
      this.listadAdmis = res;
      console.log(this.listadAdmis);
    },
    err => console.log(err),
    () => {
      this.cargandoadmins = false;
    })

  }

  verHistorico(hash: string){

    this.route.navigate(['home/administrador/detalle/'+hash]);

  }

}
