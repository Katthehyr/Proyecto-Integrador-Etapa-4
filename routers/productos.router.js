import express from 'express'
const routerProductos = express.Router()
import controladores from '../controllers/productos.controllers.js'




//GET ALL (READ) Respuesta de todos los productos//

routerProductos.get('/', controladores.getAll)

//GET ONE (READ) Respuesta de un producto//

routerProductos.get('/:id', controladores.getOne)

//POST (CREATE) Creacion de un producto//

routerProductos.post('/', controladores.create)

// PUT (UPDATE) Actualizacion de un producto//

routerProductos.put('/:id', controladores.update )

// DELETE (DELETE) Borrado de un producto//

routerProductos.delete('/:id', controladores.remove )






export default routerProductos