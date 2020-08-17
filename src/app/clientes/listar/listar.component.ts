import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    let clientes = this.clienteService.listarTodos();
    console.log(clientes);
  }

}
