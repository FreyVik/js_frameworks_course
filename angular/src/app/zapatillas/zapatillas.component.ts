import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class Zapatillas implements OnInit{
    public titulo: string = 'Componente de zapatillas'
    public zapatillas: Array<Zapatilla>
    public marcas: string[]
    public color: string
    public miMarca: string

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.marcas = new Array()
        this.color = 'blue'
        this.miMarca = 'Fila'
        this.zapatillas = this._zapatillaService.getZapatillas()
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