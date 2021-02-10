import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../services/producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Producto} from "../../model/Producto";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-add-carrito',
  templateUrl: './add-carrito.page.html',
  styleUrls: ['./add-carrito.page.scss'],
})
export class AddCarritoPage implements OnInit {

  uid:string;
  productos: Observable<any[]>;
  constructor(private route: ActivatedRoute, private router: Router, private productoService: ProductoService,
              private store:Storage) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.uid = this.router.getCurrentNavigation().extras.state.uid;
      }
    })
  }

  ngOnInit() {
    this.productos = this.productoService.getProductoById(this.uid);
  }

  addCarrito(producto: Producto){
    this.store.set('uidUser',producto);
    console.log(producto);
  }



}
