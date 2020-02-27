import Cantidad from "./cantidad.js"
import Ingredientes from "./ingredientes.js"
import Receta from "./receta.js"

class Main{
    constructor(){
        this.cantidad1=new Cantidad("20","gramos");
        this.ingredientes1=new Ingredientes(this.cantidad1,"Azucar","32");
        this.receta1= new Receta("Pizza de peperoni","Gilberto Rodriguéz", this.cantidad1)
    }
    probarCantidad(){
        console.log(`////////////////////////Cantidad///////////////////////////////////////`)
        console.log(this.cantidad1.getDescripcionUno());
    }
    probarIngredientes(){
        console.log(`///////////////////////Ingredientes////////////////////////////////////////`)
        console.log(this.ingredientes1.getDescripcion())
    }
    probarReceta(){
        console.log(`///////////////////////Receta////////////////////////////////////////`)
        console.log(this.receta1.imprimirEnConsola())
        

        
    }
}
let app=new Main();
app.probarCantidad();
app.probarIngredientes();
app.probarReceta();