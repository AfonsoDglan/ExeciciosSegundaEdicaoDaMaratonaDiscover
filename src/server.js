const express = require("express") //uso o require para buscar o express que instalei para usar
const server = express() //executar o express
const routes = require("./routes") //estou importando as rotas criadas no arquivo routes.js
const path = require("path")

//__dirname me retorna o caminho absoluto até a pasta src

// aqui estou setando o ejs como meu rederizador de template engine
server.set('view engine',  'ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics e serve para criar todas as rotas dos arquivos publicos altomatico
server.use(express.static("public"))

// usar o req.body ou seja estou passando o corpo da minha pagina assim posso ter acesso aos dados do meu formulario presente na pagina
server.use(express.urlencoded({ extended: true }))

// usando minhas rotas
server.use(routes)

server.listen(3000, () => console.log('rodando'))//abrindo a porta 3000 para meu servidor e rodo uma function com um rodando