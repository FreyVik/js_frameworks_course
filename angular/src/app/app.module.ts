import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { Zapatillas } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    Zapatillas,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
