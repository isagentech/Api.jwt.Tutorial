const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//esta es mi constante ruteadora
const usuarioRouter = require('./api/v1.0/routes/seguridad/UsuarioRoute')


const app = express()
app.use(bodyParser.json())+


app.use('/api/v1.0/seguridad/usuarios',usuarioRouter)

app.get('/',(req,res)=>{
    res.status(200).send({'Mensaje':'Api JWT'})
})


app.listen(5500,()=>{
    console.log({'Mensaje':'Escuchando en el puerto 5500'})
})