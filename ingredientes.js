import Cantidad from "./cantidad.js"
export default class Ingredientes{
    constructor(cantidad,nombre,costo){
        this.cantidad=cantidad;
        this.nombre=nombre;
        this.costo=costo;
    }
    getDescripcion(){
        return(`${this.cantidad.getDescripcionUno()} de ${this.nombre} $${this.costo}`)
    }
}

