import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleVendedor: Vendedores;

  constructor(private vendedoresService: VendedoresService) { }

  ngOnInit() {
    this.detalleVendedor = this.vendedoresService.getDetalleVendedor();
    console.log("detalleVendedor", this.detalleVendedor);
  }

}
