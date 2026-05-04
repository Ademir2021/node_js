const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const ceps = require('./ceps.json')

setCeps(ceps)

async function setCeps() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")
        let num = 0;
        for (i = 0; ceps.length > i; i++) {
            num++;
            const cityId = Number(String(ceps[i].CODIGO_MUNICIPIO).replace(/\D/g, ''))
            await client.query('INSERT INTO zip_codes("code", "city_id") VALUES (' + "'" + ceps[i].CEP.replace(/\D/g, '') + "','" + cityId + "');")
        }
        console.log("Cidades inseridas na tabela!")

        const res = await client.query("SELECT *FROM ceps")
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