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

  public new_user: any
  public responseUser: any

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.new_user = {
      name: "",
      job: ""
    }
    this.userId = 2
    this.responseUser
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

  onSubmit(form: any) {
    this._peticionesService.addUser(this.new_user).subscribe(
      (response: any) => {
        this.responseUser = response
        form.reset()
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
