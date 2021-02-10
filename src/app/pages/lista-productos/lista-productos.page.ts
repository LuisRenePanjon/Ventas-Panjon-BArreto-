import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductoService} from "../../services/producto.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {

  productos: Observable<any[]>;
  constructor(private productoService:ProductoService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  verCarrito(uid: string){
    const navigationExtras: NavigationExtras = {
      state: {
        uid: uid
      }
    };
    this.router.navigate(['/add-carrito'], navigationExtras);
  }

}
