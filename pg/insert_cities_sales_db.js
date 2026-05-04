const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const citys = require('./citys.json')

// id
// code_ibge
// name
// country_id
// state_id

function getStateCode(UF) {
    const states = {
        RO: 11, AC: 12, AM: 13, RR: 14, PA: 15, AP: 16, TO: 17,
        MA: 21, PI: 22, CE: 23, RN: 24, PB: 25, PE: 26, AL: 27, SE: 28, BA: 29,
        MG: 31, ES: 32, RJ: 33, SP: 35,
        PR: 41, SC: 42, RS: 43,
        MS: 50, MT: 51, GO: 52, DF: 53
    }
    return states[UF] ?? null
}


setCities(citys)

async function setCities() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; citys.length > i; i++) {
            await client.query('INSERT INTO cities("name", "state_id", "code_ibge", "country_id") VALUES (' + "'" + citys[i].NOME + "','" + getStateCode(citys[i].UF) + "','" + citys[i].CODIGO_IBGE + "','" + citys[i].CODIGO_PAIS + "');")
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