const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const products = require('./products.json')

setProduct(products)

async function setProduct() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; products.length > i; i++) {
            await client.query('INSERT INTO items("bar_code", "imagem", "name", "price_max", "price_min", "brand_id", "sector_id") values (' + "'" + products[i].bar_code + "', '" + products[i].image + "', '" + products[i].descric_product + "', '" + products[i].val_max_product + "', '" + products[i].val_min_product + "', '" + products[i].fk_brand + "', '"+products[i].fk_sector+"');")
        }
        console.log("Items inserido na tabela!")

        const res = await client.query("SELECT *FROM items")
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