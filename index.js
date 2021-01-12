const express = require('express')
const app = express()
const port = 3000

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const loginRoutes = require('./routes/login')


app.use('/',indexRoutes)
app.use('/user',userRoutes)
app.use('/product',indexRoutes)
app.use('/login',userRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`iniciado correctamente`)
})