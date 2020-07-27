const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./SaudacaoMid')
const usuarioApi = require('./API/usuario')
const produtoApi = require('./API/produto')

produtoApi(app, 'Com Param!')
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Breno'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    //let corpo = ''
    //req.on('data', function(parte) {
    //    corpo += parte
    //})

    //req.on('end', function() {
    //    req.send(corpo)
    //})
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
    //res.send('Eu nunca estou <br><b>BEM</b>!')
    console.log('Durante...')
    res.json({
        data: {
            nome: 'Breno',
            sobrenome: 'Oliveira'
        },
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    //res.json([
    //    {nome: 'Breno', sobrenome: 'Oliveira'},
    //    {nome: 'Layla', sobrenome: 'Braga'},
    //    {nome: 'Jaspion', sobrenome: 'da Moca'}
    //])
    next()
})

app.use((req, res, next) => {
    console.log('Depois...')
    next()
})

app.listen(3000, () => {
    console.log('Executando Back-End...')
})