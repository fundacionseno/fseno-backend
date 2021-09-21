import { conexion } from "../database";
import e, { Request, Response } from "express";
import { IDonaciones } from "../models/donaciones";

export class DonacionesController 
{
    public async listarDonaciones(req:Request, res:Response){
        try {
            const conex = await conexion();

            let donaciones = await conex.query('select *,(select descripcion from categoria_donaciones where id_categoria_donaciones = d.categoria) as categoria from donaciones d');

            res.json(donaciones);
            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async crearDonaciones(req:Request, res:Response){
        try {
            let donaciones:IDonaciones = req.body;

            const conex = await conexion();

            await conex.query('insert into donaciones set ?',[donaciones]);

            res.json("Donacion Creada");
            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async eliminarDonaciones(req:Request, res:Response){
        try {
            const conex = await conexion();

            let id_donaciones = req.params.id;

            await conex.query('delete from donaciones where id_donaciones = ?',[id_donaciones]);

            res.json("Donacion Eliminada");
            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async actualizarDonaciones(req:Request, res:Response){
        try {
            const conex = await conexion();

            let id_donaciones = req.params.id;

            let nueva_don = req.body;

            await conex.query('update donaciones set ? where id_donaciones = ?',[nueva_don, id_donaciones]);

            res.json("Donacion actualizada");
            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async obtenerDonaciones(req:Request, res:Response){
        try {
            const conex = await conexion();

            let id_donaciones = req.params.id;
    
            let una_donacion = await conex.query('select * from donaciones where id_donaciones = ?',[id_donaciones]);
    
            res.json([una_donacion]);
            await conex.end()            
        } catch (error) {
            return res.json(error)
        }
        
    }
}