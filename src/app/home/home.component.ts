import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { Administrador } from 'src/app/common/clases/administrador';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin: Administrador;

  constructor(private adminService: AdministradorService){

    this.admin = new Administrador();

  }

  ngOnInit() {

    

  }

}
