const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const countries = require('./countries.json')

setCountry(countries)

async function setCountry() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; countries.length > i; i++) {
            await client.query('INSERT INTO countries("name_country", "acronym", "ddi", "code_country", "code_revenue") values (' + "'" + countries[i].NOME + "', '" + countries[i].SIGLA + "', '" + countries[i].DDI + "', '" + countries[i].COD_PAIS + "', '" + countries[i].CODIGO_RECEITA + "');")
        }
        console.log("Países inseridos na tabela!")

        const res = await client.query("SELECT *FROM countries")
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