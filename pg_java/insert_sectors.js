const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const sectors = require('./sectors.json')

setSector(sectors)

async function setSector() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; sectors.length > i; i++) {
            await client.query('INSERT INTO sectors("name") VALUES (' + "'" + sectors[i].name_sector + "');")
        }
        console.log("Sectors inseridas na tabela!")

        const res = await client.query("SELECT *FROM sectors")
        console.table(res.rows)
    }
    catch (err) {
        console.log("Erro ocurred: " + err)
    }
    finally {
        await client.end()
        console.log("Cliente desconectado.")
    }
}