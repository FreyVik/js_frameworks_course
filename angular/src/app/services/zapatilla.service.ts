import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>
    
    constructor () {
        this.zapatillas = [
            new Zapatilla('Reebok classic', 'Rebook', 'rojo', 50, true),
            new Zapatilla('Nike Runner', 'Nike', 'negro', 60, true),
            new Zapatilla('Adidas Yeeze', 'Adidas', 'gris', 180, false),
            new Zapatilla('Air Jordan', 'Adidas', 'azul', 200, true)
        ]
    }

    getText(): string {
        return "Hola mundo"
    }

    getZapatillas(): Zapatilla[] {
        return this.zapatillas
    }
}