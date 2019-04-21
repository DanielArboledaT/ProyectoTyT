import { Component, OnInit, Input } from '@angular/core';
import { Administrador } from 'src/app/common/clases/administrador';
import { AdministradorService } from 'src/app/common/services/administrador.service';

@Component({
  selector: 'app-historico-admin-cliente',
  templateUrl: './historico-admin-cliente.component.html',
  styleUrls: ['./historico-admin-cliente.component.css']
})
export class HistoricoAdminClienteComponent implements OnInit {

  @Input() admin: Administrador;
  historicoAdminClientes;

  constructor(private adminService: AdministradorService) { }

  ngOnInit() {
    this.adminService.consularHistoricoAdminCliente(this.admin.idAdministrador).subscribe(res => {
      this.historicoAdminClientes = res;
    })
  }

}
