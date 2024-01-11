const Client = require('pg').Client
const user_db = require('./.env.json')
const client = new Client(user_db)
const products = require('./cloud_nuvem_public_products_export_2023-09-21_164048.json')

setUser(products)

async function setUser() {
    try {
        console.log("iniciando a conexão.!")
        await client.connect()
        console.log("Conexão bem sucedida!")

        for (i = 0; products.length > i; i++) {
            await client.query('INSERT INTO products("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector", "bar_code", "image") values (' + "'" + products[i].descric_product + "', '" + products[i].val_max_product + "', '" + products[i].val_min_product + "', '" + products[i].fk_brand + "', '" + products[i].fk_sector + "', '" + products[i].bar_code + "', '"+products[i].image+"');")
        }
        console.log("Products inserido na tabela!")

        const res = await client.query("SELECT *FROM products")
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