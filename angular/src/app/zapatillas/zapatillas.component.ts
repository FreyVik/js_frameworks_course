import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class Zapatillas implements OnInit{
    public titulo: string = 'Componente de zapatillas'
    public zapatillas: Array<Zapatilla>
    public marcas: string[]
    public color: string
    public miMarca: string

    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebok classic', 'Rebook', 'rojo', 50, true),
            new Zapatilla('Nike Runner', 'Nike', 'negro', 60, true),
            new Zapatilla('Adidas Yeeze', 'Adidas', 'gris', 180, false),
            new Zapatilla('Air Jordan', 'Adidas', 'azul', 200, true)
        ]
        this.marcas = new Array()
        this.color = 'blue'
        this.miMarca = 'Fila'
    }

    ngOnInit() {
        this.getMarcas()
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca)
            }
        })

        console.log(this.marcas);
    }

    getMarca() {
        alert(this.miMarca)
    }

    addMarca() {
        this.marcas.push(this.miMarca)
    }

    borrarMarca(indice: any) {
        delete this.marcas[indice]
        this.marcas.splice(indice, 1)
    }

    onBlur() {
        console.log("Has salido en el input");
    }

    mostrarPalabra() {
        alert(this.miMarca)
    }
}