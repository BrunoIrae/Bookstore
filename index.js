const express = require('express')
const app = express()
const port = 5500
const bodyparser = require('body-parser')


//Configurando body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//Configurando EJS
app.set('view engine', 'ejs')

//Configurando arquivos static
app.use(express.static('public'))


//Rota principal
app.get('/', (req, res) =>{
    res.render('index')
})

//Rota home
app.get('/home',(req, res)=>{
    res.send('home');
})

//Rota main
app.get('/main',(req, res)=>{
    res.render('page/main');
})

//Rota login
app.get('/login',(req, res)=>{
    res.render('login');
})

//Rota cadastro
app.get('/cadastro',(req, res)=>{
    res.render('cadastro');
})

//Rota livros
app.get('/livros',(req, res)=>{
    res.render('livros');
})

//Iniciando o servidor
app.listen((port , ()=>{
    console.log('Servidor online!')
}))