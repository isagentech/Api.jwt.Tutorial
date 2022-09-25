const usuarioController = require('../../controllers/seguridad/UsuarioController')
const express = require('express')
const usuarioRouter = express.Router();


usuarioRouter.get('/listar',(req,res)=>{
    let listar = usuarioController.ListarPersonas();

    listar.then((data)=>{
        res.status(200).send({data})
    })
    .catch((data)=>{
        res.status(500).send({data})
    })
})


module.exports = usuarioRouter;