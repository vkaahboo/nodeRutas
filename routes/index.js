//requerimos la libreria express
const express = require('express')

//es una funcion/metodo de la lib express que crea las rutas 
// y utiliza las rutas principal
const router = express.Router();

//creamos la ruta que queramos
//localhost:3000
router.get('/',(req,res) =>{
    res.send('archivo ruta index')
})

//localhost:3000/fabrica
router.get('/fabrica',(req,res) =>{
    res.send('index/fabrica')
})

//localhost:3000/empleados
router.get('/empleados',(req,res) =>{
    res.send('index/empleados')
})










//exporta el modulo completo
module.exports = router;