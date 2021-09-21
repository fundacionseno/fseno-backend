import { conexion } from "../database";
import { Request, Response } from "express";
import { ILocalidad } from "../models/localidad";

export class LocalidadController
{
    public async listarLocalidad(req:Request, res:Response){
        try {
            const conex = await conexion();

            let localidad = await conex.query('select * from localidad');
    
            res.json(localidad); 
            await conex.end()          
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async crearLocalidad(req:Request, res:Response){
        try {
            let localidad:ILocalidad = req.body;

            const conex = await conexion();
    
            await conex.query("insert into localidad set ?",[localidad]);
            
            res.json('Localidad Creada');
            await conex.end()           
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async eliminarLocalidad(req:Request, res:Response){
        const conex = await conexion();
        let id_localidad = req.params.id;

        try {
            await conex.query('delete from localidad where id_localidad = ?',[id_localidad]);
            res.json("Localidad eliminada");
            await conex.end()

        } catch (error) {
           return res.json("No se puede eliminar una localiadad que este siendo utilizada ")
        }
    }

    public async actualizarLocalidad(req:Request, res:Response){
        try {
            const conex = await conexion();

            let id_localidad = req.params.id;
    
            let nueva_localidad = req.body;
    
            await conex.query("update localidad set ? where id_localidad = ?", [nueva_localidad, id_localidad]);
    
            res.json('Localidad Actualizada')
            await conex.end()            
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async listarLocalidades(req:Request, res:Response){
        try {
            const conex = await conexion();

            let id_provincia = req.params.id;
    
            let localidad = await conex.query('select * from localidad where provincia =?',[id_provincia] );
    
            res.json(localidad); 
            await conex.end()           
        } catch (error) {
            return res.json(error)
        }
        
    }

}