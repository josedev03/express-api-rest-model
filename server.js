const express = require('express')
const app = express()
const colors = require('colors')

const db = require('./db')

// importamos el archivo que se encargara de todas las rutas
const router = require('./network/routes')

// creamos la conexion hacia la base de datos
db.connect(app)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// envio de la aplicacion como parametro
router(app)

app.on('readyBD', () => {
  app.listen(5000, () => {
    console.log(colors.green('[APP] Ready'))
  })
})
