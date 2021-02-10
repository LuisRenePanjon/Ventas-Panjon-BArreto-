import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCarritoPageRoutingModule } from './add-carrito-routing.module';

import { AddCarritoPage } from './add-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarritoPageRoutingModule
  ],
  declarations: [AddCarritoPage]
})
export class AddCarritoPageModule {}
