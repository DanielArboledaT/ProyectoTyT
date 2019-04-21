import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleVendedor: Vendedores;
  progressBar: number;
  ultimosPedidos: any[];
  columnsPedidosUegentes: string[] = [ 'Id', 'Nombre','Fecha de entrega', 'Valor', 'Acciones'];
  hash: string;
  cargandoVendedor: boolean;

  constructor(private vendedoresService: VendedoresService,
    private router : Router,
    private activRoute: ActivatedRoute) { 

      this.progressBar = 10;

      this.ultimosPedidos = [
        {
          id:"1",
          nombre:"Pedido 1",
          valor: 200000,
          fechaEntrega: "31/12/2019"
        },
        {
          id:"2",
          nombre:"Pedido 2",
          valor: 3000000,
          fechaEntrega: "31/12/2019"
        },
        {
          id:"3",
          nombre:"Pedido 3",
          valor: 300000,
          fechaEntrega: "31/12/2019"
        },
        {
          id:"4",
          nombre:"Pedido 4",
          valor: "3000000",
          fechaEntrega: "31/12/2019"
        }
      ];

    this.cargandoVendedor = true;  
  }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(params => {
      this.hash = params.get('hash');
      this.consultarVendedor();
    });
   
    
  }

  consultarVendedor(){

    this.vendedoresService.consultarVendedorByHash(this.hash).subscribe(res => {

      this.detalleVendedor = res[0];
      this.cargandoVendedor = false;
    })

  }


  editarVendedor(){
    this.vendedoresService.setDetalleVendedor(this.detalleVendedor);
    this.router.navigate(['home/vendedores/insertar']);
  }

  //Esta finción hace la sumatoria del valor de los pedidos urgentes
  getTotalCost() {
    return this.ultimosPedidos.map(v => v.valor).reduce( (acc, valor) => acc + parseInt(valor), 0);
  }

}
