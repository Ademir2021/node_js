// const url = "http://192.168.80.109:3000"
// const urlProducts = url + "/products"

function greeting(name){
    alert(`Hello, ${name}`)
};
function processUserInput(callback){
    const name = prompt("Plase enter your name.");
    callback(name)
};
// processUserInput(greeting);

const getProducts = async () => {
    try {
        await axios.get(urlProducts)
            .then(response => {
                 response.data
                console.log(response.data)
            })
    } catch (err) { console.log("error occurred !" + err) }
};

function processgetProducts(callback){
    callback()
};
// processgetProducts(getProducts)

// setTimeout(function() {  
//     console.log("Essa mensagem é exibida após 3 segundos");
// }, 3000);

setTimeout(()=>{
    console.log("Esta Arrow Function será executada apóes 3 segundos")
}, 3000)
