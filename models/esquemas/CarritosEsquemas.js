import mongoose from "mongoose";

const CarritosEsquema = mongoose.Schema(
    {
        carrito:Array
    }, 
    {
        Timestamp: true,
        versionKey: false
    }
)


export default CarritosEsquema