interface CamisetaBase {
    setColor(color:string): void
    getColor(): string
}

function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function(): void {
            console.log('Camiseta estampada con el logo: ' + logo);
        }
    }
}

@estampar('Gucci')
class Camiseta implements CamisetaBase {
    private color: string
    private modelo: string
    private marca: string
    private talla: string
    private precio: number

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio
    }

    public setColor(color:string): void {
        this.color = color
    }

    public getColor():string {
        return this.color
    }
}

class Sudadera extends Camiseta {
    private capucha: boolean

    public setCapucha(hasCapucha: boolean): void {
        this.capucha = hasCapucha
    }

    public getCapucha(): boolean {
        return this.capucha
    }
}

var camiseta = new Camiseta('asd', 'asd', 'asd', 'asd', 24)
console.log(camiseta);
camiseta.estampacion()

