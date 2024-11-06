const axios = require('axios').default
const url = 'http:localhost:3000/product_list_query'

const prod = {
    id_product:null,
    descric_product:"KIT",
    fk_brand:0,
    fk_sector:0
}

const getAxios = async () => {
    try {
        await axios.get(url, {params: prod})
            .then(response => {
                 response.data
                console.log(response.data)
            })
    } catch (err) { console.log("error occurred !" + err) }
};
getAxios()