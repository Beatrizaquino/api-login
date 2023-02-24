const express = require('express');
//criando uma instancia do express
const app = express();

//consumindo este metodo
app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu tudo certo, por enquanto...'
    });
});

module.exports = app;