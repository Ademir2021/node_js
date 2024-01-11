const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const citys = require('./citys.json')

setCities(citys)

async function setCities() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; citys.length > i; i++) {
            await client.query('INSERT INTO cities("name_city", "uf", "code_ibge", "code_state_revenue", "code_country", "code_federal_revenue") VALUES (' + "'" + citys[i].NOME + "','" + citys[i].UF + "','" + citys[i].CODIGO_IBGE + "','" + citys[i].CODIGO_RECEITA_ESTADUAL + "','" + citys[i].CODIGO_PAIS + "','" + citys[i].CODIGO_RECEITA_FEDERAL + "');")
        }
        console.log("Cidades inseridas na tabela!")

        const res = await client.query("SELECT *FROM cities")
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