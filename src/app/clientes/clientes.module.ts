import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './listar/listar.component';
import { ClientesRoutingModule } from './clientes-routing.module';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule, HttpClientModule, ClientesRoutingModule
  ], 
  providers: [
    ClienteService
  ]
})
export class ClientesModule { }
