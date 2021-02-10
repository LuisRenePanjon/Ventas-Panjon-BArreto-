import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../model/Usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario = new Usuario();
  //logueado: Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  loginUsuario(){
    this.usuarioService.loginUsuario(this.usuario.correo, this.usuario.contrasenia).subscribe(
      data => {
        if (data.length > 0 ){
          //this.logueado = (JSON.parse(JSON.stringify(data[0])));
          this.router.navigate(['/lista-productos']);
          console.log('Logueado');
        }else{
          console.log('Usuario no encontrado');
        }
      });
  }
}
