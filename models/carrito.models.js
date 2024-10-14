import mongoose from "mongoose"
import CarritosEsquemas from "./esquemas/CarritosEsquemas.js"

const CarritosModelo = mongoose.model('carrito', CarritosEsquemas)



const crearCarrito =  async (carrito) => {

    try {
        
        const carritoCreado = new CarritosModelo({carrito})
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado

    } catch (error) {
        console.log('[crearCarrito]: No se pudo crear...', error)
    }


}


export default {
    crearCarrito
}