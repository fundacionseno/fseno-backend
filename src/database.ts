import { createPool } from "promise-mysql";

export async function conexion()
{
   const connect = await createPool({
        host:'us-cdbr-east-04.cleardb.com',
        user:'b038b64473ea8c',
        password:'16a24ce2',
        database:'heroku_d6415f3aee583cb'
    });

    return connect;

}

