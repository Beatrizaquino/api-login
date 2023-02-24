//criando servido http
const http = require('http');
//importando nosso app
const app = require('./app')
//crinado variavel para armazenar a porta
//se a variavel nãop estiver preeencida por padrão vai pegar a porta 3000
const port = process.env.PORT || 3000;
//criandos server usando biblioteca http
const server = http.createServer();

//pedindo para executar na porta 3000
server.listen(port);