import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from 'src/app/common/clases/administrador';

@Component({
  selector: 'app-detalle-administrador',
  templateUrl: './detalle-administrador.component.html',
  styleUrls: ['./detalle-administrador.component.css']
})
export class DetalleAdministradorComponent implements OnInit {

  hash: string;
  admin: Administrador;
  historicoAdminVendedores;
  cargandoAdmin: boolean;
  panelOpenState = false;

  constructor(private adminService: AdministradorService,
    private activRoute: ActivatedRoute) {

      this.cargandoAdmin = false;

    }

  ngOnInit() {
    this.cargandoAdmin = true;
    this.activRoute.paramMap.subscribe(params => {
      this.hash = params.get('hash');
      this.consultarAdministrador();
    });

  }

  consultarAdministrador(){

    this.adminService.consultarAdministradorByHash(this.hash).subscribe(res => {

      this.admin = res[0];
      console.log(this.admin);
      this.consultarHistoricoVendedor()
      
    });

  }

  consultarHistoricoVendedor(){

    this.adminService.consularHistoricoAdminVendedor(this.admin.idAdministrador).subscribe(res => {

      this.historicoAdminVendedores = res;
      console.log(this.historicoAdminVendedores);
      this.cargandoAdmin = false;

    }) 

  }

}
