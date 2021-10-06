import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    
    constructor(){
        this.titulo = "Componente de videojuegos"
        this.listado = "listado de los juegos mas populares"
        
        // console.log('Se ha cargado el componente Videojuego. Primero constructor');
    }

    ngOnInit() {
        // console.log('Despues el OnInit');
    }

    ngDoCheck() {
        // console.log('DoCheck ejecutado');
    }

    ngOnDestroy() {
        // console.log('Y volo!');
    }

    cambiarTitulo() {
        // this.titulo = "Titulo cambiado"
    }
}
