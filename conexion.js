import mssql from "mssql";

const connectionSettings = {
    user: 'tester1',
    password: 'tester',
    server:'localhost',
    database: "MaxiFlix_DB",
    options: {
        instanceName: 'SQLEXPRESS',
        encrypt: true, // Para Azure
        trustServerCertificate: true // Para desarrollo local
        }
    
}

export async function getconnection(){
    try{
        return await mssql.connect(connectionSettings);
    }catch(error)
    {
        console.error(error);
    }
}

export{ mssql };