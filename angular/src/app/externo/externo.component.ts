import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any
  public userId: any
  public fecha: any

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 2
  }

  ngOnInit(): void {
    this.cargaUsuario()
    this.fecha = new Date(2021, 10, 8)
  }

  cargaUsuario() {
    this.user = false
    this._peticionesService.getUser(this.userId).subscribe(
      (result: any) => {
        this.user = result.data
        
        console.log(this.user)
      },
      error => {
        console.log(<any>error);
        
      })
  }

}
