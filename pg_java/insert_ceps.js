const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const ceps = require('./ceps.json')

setCeps(ceps)

    // num_cep 
    // code_city
    // type_cep 
    // public_place
    // num_initial
    // num_final
    // complement
    // city
    // uf
  

async function setCeps() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")
        let num = 0;
        for (i = 0; ceps.length > i; i++) {
            num ++;
            await client.query('INSERT INTO ceps("num_cep", "code_city", "type_cep", "public_place", "num_initial", "num_final", "complement", "city", "uf") VALUES (' + "'" + ceps[i].CEP+ "','" + num + "','" + ceps[i].TIPO + "','" + ceps[i].LOGRADOURO + "','" + ceps[i].NUMERO_INICIAL + "','" + ceps[i].NUMERO_FINAL+"','"+ceps[i].COMPLEMENTO+"','"+ceps[i].MUNICIPIO+"','"+ceps[i].UF+"');")
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