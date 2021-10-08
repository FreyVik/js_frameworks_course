import { Component, OnInit } from '@angular/core';
import { MensajeUsuario } from '../models/MensajeUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public mensajeUsuario: MensajeUsuario
  
  constructor() {
    this.mensajeUsuario = new MensajeUsuario('','','','')
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.mensajeUsuario);
    form.reset()
  }
}
