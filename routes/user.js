
const express = require('express')

const router = express.Router();


//localhost:3000/user
router.get('/',(req,res) =>{
    res.send('archivo ruta user')
})

//localhost:3000/user/altura
router.get('/altura',(req,res) =>{
    res.send('/user/altura')
})

//localhost:3000/user/edad
router.get('/edad',(req,res) =>{
    res.send('/user/edad')
})

module.exports = router;