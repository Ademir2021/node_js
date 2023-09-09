const nodemailer = require("nodemailer");
// var smtpTransport = require('nodemailer-smtp-transport');

let transporter = nodemailer.createTransport({
    service: "hotmail",
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: "ademir_gre@hotmail.com",
        pass: "*******"
    },
    tls: {
        ciphers: 'SSLv3',
    },
});

transporter.sendMail({
    from: "Ademir Souza de Almeida <ademir_gre@hotmail.com>",
    to: "centroserra@gmail.com",
    subject: "Olá, sou Ademir e estou trabalhando com nodemailer",
    html: "Ola, meu nome é Ademir e eu acho o <a href='https://www.facebook.com/ademir.souzadealmeida'>nodemailer</a> muito legal"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})