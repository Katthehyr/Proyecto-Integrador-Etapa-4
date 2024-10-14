import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema ({

        nombre: String,
        foto: String,
        descripcion: String,
        precio: Number,
        stock: Number,
        envio: Boolean
},
{
        timestamps: true, 
        versionKey: false
    }
)



export default ProductosEsquema