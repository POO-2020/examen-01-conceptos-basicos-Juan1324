export default class Cantidad{

    constructor(valor,unidad){

        this.valor=valor;
        this.unidad=unidad;
        
    }
    getDescripcionUno(){
        return(`${this.valor} ${this.unidad}`);
    }
}
