let nodemailer = require("nodemailer");
//  var smtpTransport = require('nodemailer-smtp-transport');

let transporter = nodemailer.createTransport({
     service: "gmail",
     host: "smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"centroserra@gmail.com",
        pass:"******"
    },
    // tls: {
    //     ciphers: 'SSLv3',
    //   },
});

transporter.sendMail({
    from:"Ademir Souza de Almeida <centroserra@gmail.com>",
    to:"ademir_gre@hotmail.com",
    subject:"Olá, sou Ademir e estou trabalhando com nodemailer",
    html:"Ola, meu nome é Ademir e eu acho o <a href='https://www.facebook.com/ademir.souzadealmeida'>nodemailer</a> muito legal"
}).then(message =>{
    console.log(message)
}).catch(err =>{
    console.log(err)
})