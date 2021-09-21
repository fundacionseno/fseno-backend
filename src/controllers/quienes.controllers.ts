import { conexion } from "../database";
import { Request, Response } from "express";
import { IQuienes } from "../models/quienes_somos";

export class   QuienesController
{
    public async listarQuienes(req:Request,res:Response){
        try {
            const conex = await conexion();

            let quienes = await conex.query('select * from quienes_somos');
    
            res.json(quienes);
            await conex.end()            
        } catch (error) {
            return res.json(error)
        }
        
        
    }

    public async crearQuienes(req:Request,res:Response){
        try {
            let quienes:IQuienes = req.body;

            const conex = await conexion();
    
            await conex.query('insert into quienes_somos set ?',[quienes]);
    
            res.json('Elemento  Agregado con exito');
            await conex.end()            
        } catch (error) {
            return res.json(error)
        }

        

    }

    public async eliminarQuienes(req:Request,res:Response){
        try {
            const conex = await conexion();

            let id_qs =req.params.id;
    
            await conex.query('delete from quienes_somos where id_qs = ?', id_qs);
    
            res.json('Elemento Eliminado con exito');
            await conex.end()            
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async actualizarQuienes(req:Request,res:Response){
        try {
            const conex = await conexion();

            let id_qs = req.params.id;
    
            let nueva_e = req.body;
    
            await conex.query('update quienes_somos set ? where id_qs = ?',[nueva_e, id_qs]);
    
            res.json('Elemento Actualizado con exito')
            await conex.end()            
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async obtenerQuienes(req:Request, res:Response){
        try {
            const conex = await conexion();

            let id_qs = req.params.id;
    
            let nueva_e = await conex.query("select * from quienes_somos where id_qs =?",[id_qs]);
    
            res.json(nueva_e[0]);
            await conex.end()           
        } catch (error) {
            return res.json(error)
        }
        
    }

}