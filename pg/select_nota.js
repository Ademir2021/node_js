const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
getUsers()

async function getUsers() {
    try {
        await client.connect()
        const res_nota = await client.query("SELECT  *FROM nota WHERE nota = 17")
        console.log(res_nota.rows)
        /** */
        const res_itens_nota = await client.query("SELECT  *FROM itens_nota WHERE id_venda = 17")
        console.table(res_itens_nota.rows)
    }
    catch (ex) {
        console.log("Ocorreu erro em users", + ex)
    }
    finally {
        await client.end()
        console.log("\nCliente desconectado")
    }
}
