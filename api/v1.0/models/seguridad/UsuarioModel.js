const mysql = require('../../../../utils/global/database')

class UsuarioModel{
    ListarPersonas(){
        return new Promise((resolve,reject)=>{
            mysql.query('call sp_personas_crud(?)',[1],(error,result)=>{
                if(error){
                    reject({'CodigoError':'9999','MensajeError':'AlgoSalioMal'})
                }
                else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new UsuarioModel()