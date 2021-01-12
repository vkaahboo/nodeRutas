const express = require('express')

const router = express.Router();


//localhost:3000/login
router.get('/',(req,res) =>{
    res.send('archivo ruta login')
})

//localhost:3000/login/si
router.get('/si',(req,res) =>{
    res.send('/login/si')
})

//localhost:3000/login/no/mensaje
router.get('/no/:mensaje',(req,res) =>{
    console.log(req.params)
    req.params.mensaje
    
    res.send('/login/no')
})


module.exports = router;