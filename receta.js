import Cantidad from "./cantidad.js"
import Ingredientes from "./ingredientes.js"
export default class Receta{
    constructor(nombre, autor, ingredientes) {
        this.nombre = nombre;
        this.autor = autor;
        this.ingredientes =[]
      }
    getNumeroDeIngredientes(){ 
        return `${this.ingredientes.length}`;
    }
    getCosto() {
        let costo = 0;
        this.ingredientes.forEach( (ingrediente, x) => {
          costo = this.valor + ingrediente.valor;
        return (`$${costo}${x}`);});
    }
  imprimirEnConsola(){
      console.log( `${this.nombre} Autor:${this.autor} Los ingredientes:`);
      this.ingredientes.forEach( (ingrediente, x) => {
      console.log(`${x+1}. ${ingrediente.getDescripcion()}`)});
      console.log(`El costo total: ${this.getCosto()}`);
  }
}
