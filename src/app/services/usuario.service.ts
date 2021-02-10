import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Usuario} from "../model/Usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public angularfs: AngularFirestore) { }

  saveUsuario(usuario: Usuario){
    const refUsuario = this.angularfs.collection('usuarios');
    if (usuario.uid == null){
      usuario.uid = this.angularfs.createId();
    }
    refUsuario.doc(usuario.uid).set(Object.assign({},usuario), {merge: true});
  }

  loginUsuario(correo:string, contrasenia: string):Observable<any>{
    return this.angularfs.collection('usuarios', ref =>
    ref.where('correo', '==' , correo).where('contrasenia', '==' , contrasenia))
    .valueChanges();
  }
}
