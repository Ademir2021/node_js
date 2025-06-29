const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
getUsers()

async function getUsers(){
try{
    console.log("Iniciando a conexão!")
    let username = "centroserra@gmail.com"
    await client.connect()
    console.log('Bem sucedida!')
    const resultado = await client.query("select username, password from users WHERE username = '"+username+"' LIMIT(1) ")
    let user = resultado.rows
    console.log(user) 
 }
    catch(ex){
    console.log("Ocorreu erro em users", + ex)
    }
    finally{
        await client.end()
        console.log("\nCliente desconectado")
    }
}
