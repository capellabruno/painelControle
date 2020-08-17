import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
      path: 'listar',
      component: ListarComponent
  },
  {
      path: '',
      redirectTo: '/tabs/clientes/listar',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}
