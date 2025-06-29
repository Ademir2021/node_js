const animal = {
    som: "som de animal",
    tipo:'animal',
    emiteSom: function(){
        console.log(this.som)
    }
}

const gato = {
    som:'som de Gato',
    tipo: "gato"
}

Object.setPrototypeOf(gato, animal)

gato.emiteSom()

const gatoRaivoso = {
    som:"Som de Gato Raivoso",
    tipo:"gatoRaivoso",
    miaForte: function(){
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)

gatoRaivoso.miaForte()