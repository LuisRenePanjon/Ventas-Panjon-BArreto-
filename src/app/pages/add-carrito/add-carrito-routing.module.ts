import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarritoPage } from './add-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarritoPageRoutingModule {}
