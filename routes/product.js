const express = require('express')

const router = express.Router();


//localhost:3000/product
router.get('/',(req,res) =>{
    res.send('archivo ruta product')
})

//localhost:3000/product/calzado
router.get('/calzado',(req,res) =>{
    res.send('/product/calzado')
})

//localhost:3000/product/pantalon
router.get('/pantalon',(req,res) =>{
    res.send('/product/pantalon')
})

//localhost:3000/product/relog
router.get('/relog',(req,res) =>{
    res.send('/product/relog')
})

module.exports = router;