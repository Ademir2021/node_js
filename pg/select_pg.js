const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
getUsers()

async function getUsers(){
try{
    await client.connect()
    const res = await client.query("SELECT *FROM itens_sale WHERE fk_sale = 1")
    console.table(res.rows)
 }
    catch(err){
    console.log("error occured: ", + err)
    }
    finally{
        await client.end()
        console.log("\nCliente desconectado")
    }
}
