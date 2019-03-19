import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  cargandoVendedores: boolean;
  vendedores: Vendedores;

  constructor(private vendedoresService: VendedoresService) {
    this.cargandoVendedores = true;
  }

  ngOnInit() {
    this.vendedoresService.consultarVendedores().subscribe(res => {
      console.log(res);
      this.vendedores = res;
    },
    err => console.log(err),
    () => {
      this.cargandoVendedores = false;
    })
  }

}
