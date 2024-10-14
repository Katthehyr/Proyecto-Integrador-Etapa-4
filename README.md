# Inicializando el proyecto integrador etapa 4

sh
touch server.js && npm init -y && npm i express dotenv mongoose && npm i nodemon -D
git init && touch .gitignore
touch .env .env.example

## Creando carpetas del proyecto

sh

mkdir controllers models constants utils
mkdir routers middlwares

## Copiamos de la pagina de express el "Hello World"

<https://expressjs.com/es/starter/hello-world.html>

js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

## Modificamos el package.json

json

 "version": "1.0.0",
  "type": "module",
  "main": "server.js",

json
 "scripts": {
    "start": "node server.js",
    "dev":"nodemon server.js"
  },

## Hacemos el restore del dump local en la base remota

mongorestore --uri "mongodb+srv://cluster0.u3kxg.mongodb.net/"--username monkatthyr --nsInclude integrador_etapa_4.* dump

mongorestore --uri "mongodb+srv://cluster0.u3kxg.mongodb.net/"--username monkatthyr --nsInclude integrador_etapa_4.* dump

mongoexport --uri "mongodb+srv://cluster0.u3kxg.mongodb.net/"--username monkatthyr 


## Herramientas Administrativas

<https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.10.0.msi>

<https://www.mongodb.com/docs/database-tools/>

## Solucionar problema de cors

https://www.npmjs.com/package/cors

npm i 


## Integrador etapa 4

Implementar lo visto en clase en la etapa 4 del proyecto integrador. Trabajando con Node y MongoDB. Conectar la aplicación Backend con el Frontend entregado en la etapa 3.

Condiciones necesarias para la aprobación de la etapa 4.

Frontend subido a Netlify. Funciones requeridas. CRUD completo de productos y la acción de compra productos del carrito.
Backend subido a Render. Funciones requeridas. CRUD completo de productos persistiendo los productos en la base de datos MongoDB. También será necesario el almacenamiento del carrito en la base de datos. 

Base de datos en Mongo Atlas
Utilización de variables de entorno tanto en el Frontend como en el Backend
El proyecto tiene que estar funcionando completamente en la nube.
De ser posible hacer las correcciones mencionadas en las etapas anteriores. 



Se guarda el trabajo en render