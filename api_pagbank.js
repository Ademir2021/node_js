const sdk = require('api')('https://sandbox.pagseguro.uol.com.br');

// sdk.criarAplicacao({
//   name: 'App Name',
//   description: 'APP de Vendas',
//   site: 'http://localhost:3001',
//   redirect_uri: 'http//localhost:3001retorno',
//   logo: 'https://dev.pagbank.uol.com.br/static/media/logo.d2ebaf8f.svg'
// }, {authorization:'4D1D1C943B1B49468F2D0B00F5EE914E'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

sdk.criarPedido({
  customer: {
    phones: [
      {
        country: 55,
        area: 11,
        number: 999999999,
        type: 'MOBILE'
      }
    ],
    name: 'Jose da Silva',
    email: 'teste@test.com',
    tax_id: '12345678909'
  },
  reference_id: 'ex-00001'
}, { authorization: '4D1D1C943B1B49468F2D0B00F5EE914E' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

// sdk.consultarPedido({ order_id: '{ex-00001}' })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

// sdk.pagarPedido({ order_id: '{ex-00001}' })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

// sdk.capturarPagamento({ amount: { value: 1000 } }, { char_id: 'ex-00001' })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));
