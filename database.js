import { getconnection,mssql } from "./conexion.js";

const getproducts= async ()=>{
    try{
        const pool= await getconnection();
        const result= await pool.request().query("SELECT DESCRIPCION FROM GENEROS")
        console.log(result);
        console.log("products listed");
    }catch(error)
    {
        console.error(error);
    }
}
getproducts();
