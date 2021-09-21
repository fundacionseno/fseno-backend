import { conexion } from "../database";
import { Request, Response } from "express";
import { ICatgaleria} from "../models/catgaleria";

export class CatgaleriaController
{
    public async listarCatgaleria(req:Request, res:Response)
    {

        try {
            const conec = await conexion();

            let catgaleria = await conec.query('select * from categoria_galeria');

            res.json(catgaleria);
            await conec.end()
        } catch (error) {
            return res.json(error)
        }
        

    }

    public async crearCatgaleria (req:Request, res:Response)
    {
        try {
            let catgaleria:ICatgaleria = req.body;

            const conec = await conexion();

            await conec.query("insert into categoria_galeria set ?",[catgaleria]);
        
            res.json('El elemento fue agregado');

            await conec.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

    public async eliminarCatgaleria(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_categoria =req.params.id;
        try {
            await conec.query('delete from categoria_galeria where id_categoria = ?',[id_categoria]);
            res.json("Categoria eliminada");
            await conec.end()
        } catch (error) {
           return res.json("No se puede eliminar una categoria que este siendo utilizada por galeria")
        }
    }

    public async actualizarCatgaleria(req:Request, res:Response)
    {
        try {
            const conec = await conexion();

            let id_categoria = req.params.id;

            let nueva_data = req.body;

            await conec.query("update categoria_galeria set ? where id_categoria = ?", [nueva_data, id_categoria]);

            res.json('El elemento ha sido actualizado');
            await conec.end()
        } catch (error) {
            return res.json(error)
        }
        
        
    }

    public async obtenerCatgaleria(req:Request, res:Response)
    {
        try {
            const conec = await conexion();

            let id_categoria = req.params.id;

            let catga = await conec.query("select * from categoria_galeria where id_categoria =?",[id_categoria]);

            res.json(catga[0]);

            await conec.end()
        } catch (error) {
            return res.json(error)
        }
        
    }

}