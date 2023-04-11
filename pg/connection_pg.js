const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)

client.connect()
client.query("select * from users")
    .then(results => {
        const resultado = results.rows
        console.table(resultado)
    })
    .finally(() => client.end())