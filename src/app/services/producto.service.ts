import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public angularfs: AngularFirestore) { }

  getProductos(): Observable<any[]>{
    return this.angularfs.collection('productos').valueChanges();
  }

  getProductoById(uid: string): Observable<any[]>{
    return this.angularfs.collection('productos',
      ref => ref.where('uid', '==', uid)).valueChanges();
  }
}
