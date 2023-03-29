const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
var user = []

user = { id: 102, name: "Maria Luiza de Almeida", username: "maria_almeida@gmail.com", password: "abc123" }

setUser(user)
async function setUser(user) {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")
        await client.query("UPDATE users SET name = '" + user.name + "', username = '"+user.username+"' WHERE id = '" + user.id + "'")
        console.log("update sucess! :")

        const res = await client.query("select name from users where id = '" + user.id + "'")
        console.table(res.rows)
    }
    catch (err) {
        console.log("Ocorreu um erro. Erro: " + err)
    }
    finally {
        await client.end()
        console.log("Cliente desconectado.")
    }
}