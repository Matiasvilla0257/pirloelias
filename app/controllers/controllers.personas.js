import { pool } from "../config/db_mysql.js";

export const crearpersonas = (req, res)=>{
    console.log(req.body);
    let id = req.body.id;
    res.json({
        "respuesta":"Ersta ruta es para crear los " + id 
    });
}
export const mostrarpersonas = async(req, res)=>{    

    try {
        const resultado = await pool.query("select * from personas");
            res.json(resultado[0]);
    } catch (error) {
        res.json({
            "error": error,
            "method":"get"
        });
    }
 
}
export const actualizarpersonas = (req, res)=>{    
    console.log(req.body);
    let nombre = req.body.name;
    res.json({
        "respuesta":"Esta ruta es para ACTUALIZAR REGISTRO" + nombre
    });

}
export const eliminarpersonas = (req, res)=>{
    console.log(req.body);
    let id = req.body.id;
    res.json({
        "respuesta":"Esta ruta es para eliminar " + id 
     });
}