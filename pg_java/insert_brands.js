const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const brands = require('./brands.json')

setBrand(brands)

async function setBrand() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; brands.length > i; i++) {
            await client.query('INSERT INTO brands("name") VALUES (' + "'" + brands[i].name_brand + "');")
        }
        console.log("Brands inseridas na tabela!")

        const res = await client.query("SELECT *FROM brands")
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