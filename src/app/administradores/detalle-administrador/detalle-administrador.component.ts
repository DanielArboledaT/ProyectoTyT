import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from 'src/app/common/clases/administrador';
import { Router } from '@angular/router';

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
  verHistoricoCliente: boolean;
  verHistoricoVendedor: boolean;
  verHistoricoPedido: boolean;
  verHistoricoProducto: boolean;

  constructor(private adminService: AdministradorService,
    private activRoute: ActivatedRoute,
    private router: Router) {

      this.cargandoAdmin = false;
      this.verHistoricoCliente = false;
      this.verHistoricoPedido = false;
      this.verHistoricoProducto = false;
      this.verHistoricoVendedor = true;

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

  irDetalleVendedor(hash: string){

    this.router.navigate(['/home/vendedores/detalle/'+hash]);

  }

  consultarHistoricoAdminCliente(){
    this.verHistoricoCliente = true;
    this.verHistoricoPedido = false;
    this.verHistoricoProducto = false;
    this.verHistoricoVendedor = false;
  }

  consultarHistoricoAdminVendedor(){
    this.verHistoricoCliente = false;
    this.verHistoricoPedido = false;
    this.verHistoricoProducto = false;
    this.verHistoricoVendedor = true;
  }

}
