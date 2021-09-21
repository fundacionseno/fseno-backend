import { conexion } from "../database";
import { Request, Response } from "express";
import { ICateventos } from "../models/cateventos";

export class CateventosController
{
    public async listarCateventos(req:Request,res:Response){

        try {
            const conex = await conexion();

            let cateventos = await conex.query('select * from categoria_eventos');

            res.json(cateventos);
            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
        
    }

    public async crearCateventos(req:Request,res:Response){

        try {
            let cateventos:ICateventos = req.body;

            const conex = await conexion();

            await conex.query('insert into categoria_eventos set ?',[cateventos]);

            res.json('Categoria agregada');
            await conex.end()
        } catch (error) {
            return res.json(error)
        }

        

    }

    public async eliminarCateventos(req:Request,res:Response){
        const conex = await conexion();

        let id_categoria_eventos =req.params.id;

        try {
            await conex.query('delete from categoria_eventos where id_categoria_eventos = ?',[id_categoria_eventos]);
            res.json("Categoria eliminada");
            await conex.end()
        } catch (error) {
           return res.json("No se puede eliminar una categoria que este siendo utilizada ")
        }
    }

    public async actualizarCateventos(req:Request,res:Response){

        try {
            const conex = await conexion();

            let id_categoria_eventos = req.params.id;

            let nueva_Cateven = req.body;

            await conex.query('update categoria_eventos set ? where id_categoria_eventos = ?',[nueva_Cateven,id_categoria_eventos]);

            res.json('Categoria actualizada')

            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async obtenerCateventos(req:Request, res:Response){

        try {
            const conex = await conexion();

            let id_categoria_eventos = req.params.id;

            let unaCateven = await conex.query("select * from categoria_eventos where id_categoria_eventos = ?",[id_categoria_eventos]);

            res.json(unaCateven[0]);

            await conex.end()
        } catch (error) {
            return res.json(error)
        }
        
    }
}