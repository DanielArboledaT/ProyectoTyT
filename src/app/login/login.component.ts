import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cargando: boolean;

  constructor() { 
    this.cargando = false;
  }

  ngOnInit() {
  }

  enviar(){
    
    this.cargando = true;
    
  }

}
