import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../model/Usuario";
import {UsuarioService} from "../../services/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService:UsuarioService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  saveUsuario(){
    try{
      this.usuarioService.saveUsuario(this.usuario);
      console.log('Se ha registrado correctamente');
      this.router.navigate(['/login']);
    }catch(error){
      console.log('No se ha podido guardar Usuario', error);
      throw error;
    }
  }
}
