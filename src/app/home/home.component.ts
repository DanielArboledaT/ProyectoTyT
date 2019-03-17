import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  single: any[];
  multi: any[];

  //Estos son los settings de la tabla de pedidos urgentes
  pedidosUrgentes: any[];
  columnsPedidosUegentes: string[] = [ 'Id', 'Nombre','Fecha de entrega', 'Valor', 'Acciones'];

  //Estos son los settings de la tabla de últimos pedidos
  ultimosPedidos: any[];
  columnsUltimosPedidos : string[] = [ 'Id', 'Nombre','Fecha de entrega', 'Valor', 'Acciones' ]

  // options
  yAxisLabel = 'Ingresos';

  colorScheme = {
    domain: ['#A000CC', '#CCBE00', '#00CC19']
  };

  constructor() {
    this. multi = [
      {
        "name": "Adriana Lopez",
        "series": [
          {
            "name": "01/01/2019",
            "value": 7300000
          },
          {
            "name": "01/02/2019",
            "value": 8940000
          },
          {
            "name": "01/03/2019",
            "value": 8040000
          }
        ]
      },
    
      {
        "name": "Jorge Tamayo",
        "series": [
          {
            "name": "01/01/2019",
            "value": 7800000
          },
          {
            "name": "01/02/2019",
            "value": 8000000
          },
          {
            "name": "01/03/2019",
            "value": 6040000
          }
        ]
      },
    
      {
        "name": "Adolfo Gonzales",
        "series": [
          {
            "name": "01/01/2019",
            "value": 7300000
          },
          {
            "name": "01/02/2019",
            "value": 9940000
          },
          {
            "name": "01/03/2019",
            "value": 7040000
          }
        ]
      }
    ];

    //El array de la tabla de pedidos urgentes
    this.pedidosUrgentes = [
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
    ]
      
    
  }

  ngOnInit() {
  }

  //Esta finción hace la sumatoria del valor de los pedidos urgentes
  getTotalCost() {
    return this.pedidosUrgentes.map(v => v.valor).reduce( (acc, valor) => acc + parseInt(valor), 0);
  }

}
