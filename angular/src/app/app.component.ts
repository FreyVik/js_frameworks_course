import { Component } from '@angular/core';
import { Config } from './models/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Test para angular'
  public description: string
  public config: any
  public showVideogame: boolean = true

  constructor() {
    this.title = Config.titulo
    this.description = Config.descripcion
    this.config = Config
  }

  hideVideogame() {
    this.showVideogame = false
  }

  seeVideogame() {
    this.showVideogame = true
  }
}
