import { conexion } from "../database";
import { json, Request, Response } from "express";
import { IAcompaniamiento } from "../models/acompaniamiento";

export class AcompaniamientoController
{
    public async listarAcomp(req:Request,res:Response){

        try {
            const conex = await conexion();

            let acomp = await conex.query('select * from tipo_acompaniamiento');

            res.json(acomp);

            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
        
    }

    public async crearAcomp(req:Request,res:Response){

        try {
            let acomp:IAcompaniamiento = req.body;

            const conex = await conexion();

            await conex.query('insert into tipo_acompaniamiento set ?',[acomp]);

            res.json('Elemento agregado con exito');

            await conex.end()

        } catch (error) {
            return res.json(error)
        }

        

    }

    public async eliminarAcomp(req:Request,res:Response){
        const conex = await conexion();

        let id_acomp =req.params.id;

        try {
            await conex.query('delete from tipo_acompaniamiento where id_acomp = ?',[id_acomp]);
            res.json("Tipo de acompañamiento eliminado");

            await conex.end()

        } catch (error) {
           return res.json("No se puede eliminar un tipo de acompañamiento que esta siendo utilizado")
        }
    }

    public async actualizarAcomp(req:Request,res:Response){

        try {
            const conex = await conexion();

            let id_acomp = req.params.id;

            let nuevo_ac = req.body;
            await conex.query('update tipo_acompaniamiento set ? where id_acomp = ?',[nuevo_ac, id_acomp]);

            res.json('Elemento actualizado con exito')

            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async obtenerAcomp(req:Request, res:Response){

        try {
            const conex = await conexion();

            let id_acomp = req.params.id;

            let nuevo_ac = await conex.query("select * from tipo_acompaniamiento where id_acomp =?",[id_acomp]);

            res.json(nuevo_ac[0]);

            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }
}