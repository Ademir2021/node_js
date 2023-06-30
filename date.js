// const data = new Date('08-01-19')
//const data = new Date(2020, 19, 08, 18, 0, 0, 0)
// const data = new Date()
// console.log(data.getDay())

// var dataAtual = new Date();
// var dia = dataAtual.getDate();
// var mes = (dataAtual.getMonth() + 1);
// var ano = dataAtual.getFullYear();
// var horas = dataAtual.getHours();
// var minutos = dataAtual.getMinutes();
// console.log("Hoje é dia " + dia + "/" + mes + " de " + ano +
//  ". Agora são " + horas + ":" + minutos + "h.");


// const data = '24/06/2023'

// var str = data;
// var date = new Date(str.split('/').reverse().join('/'));
// var novaData = new Date();
// console.log(data)
// if(date > novaData) console.log("Essa data ainda não chegou!");


  // var lista = [
  //   { data: new Date('2023-06-20') },
  //   { data: new Date('2023-06-22') },
  //   { data: new Date('2023-06-21') },
  //   { data: new Date('2023-05-21') },
  //   { data: new Date('2023-04-21') },
  //   { data: new Date('2023-05-27') }
  // ];
  
  // // Função de comparação para ordenar por data
  // function compararDatas(a, b) {
  //   return a.data - b.data;
  // }
  
  // // Ordenar a lista por data
  // lista.sort(compararDatas);
  
  // // Exibir a lista ordenada
  // for (var i = 0; i < lista.length; i++) {
  //   console.log(lista[i].data);
  // }

let first = new Date('01/26/2020');
let second = new Date('01/25/2020');
 
if (first < second) {
    console.log(`${first} e menor que ${second}`);
}
else if (first > second) {
    console.log(`${first} é maior que ${second}`);
}
else {
    console.log(`${first} e igual que ${second}`);
}