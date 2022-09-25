const usuarioModel = require('../../models/seguridad/UsuarioModel')

class UsuarioController{
    ListarPersonas(){
        let consulta = usuarioModel.ListarPersonas();
        
        return new Promise((resolve,reject)=>{
            consulta.then((data)=>{
                let datos = data;
                let dataFinal = []
                dataFinal.push(datos[0])
                dataFinal.push(datos[1])
                    
                resolve(dataFinal)
                  
            })
            .catch((data)=>{
                  reject(data);
            })
        })

         
    }
}

module.exports = new UsuarioController();