const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDatos = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // esto me sirve para que una vez que el cliente pase los datos en el postman usando en el body urlencoded estos datos puedan ser pasados para objetos y ahi si salvados adentro de mi objeto produtos
// podemos ver que arriba use el app.use eso significa que esto sera usado para todas las requisiciones 

//app.use((req, res, next) => { // con esto hacemos que toda url despues del pueto sea igual a este objeto
//    res.send({nome: 'Notebook', preco: 123.45}) 
//})

//app.get('/produtos', (req, res, next) => { // esto ira a ser ejecutaado antes de ejecutar la proxima funcion perteneciente a /produto
//    console.log('Middleware 1 ...')
//      next() // esto hacer con que pase al proximo /produto
//})

//app.get('/produtos', (req, res, next) => { // Version 1
//    res.send({nome: 'Notebook', preco: 123.45}) // Converte para JSON
//})

app.get('/produtos', (req, res, next) => { // app.get significa que la app va a agarrar (por eso get) alguna info de mi servidor
    res.send(bancoDeDatos.getProdutos()) // vamos a usar la funcion getProdutos que exporte del archivo bancoDeDatos// esta funcion me dava una lista de todos los productos registados
})

app.get('/produtos/:id', (req, res, next) => { // cuando pongo :id significa que id pasa a ser un parametro, osea que en la url devo poner algun numero en especifico
    res.send(bancoDeDatos.getProduto(req.params.id)) // pongo req.params.id ya que es algo que esta adentro de la url osea es un request y se encuantra en lo parametros de esta url, y el parametro que quiero es el id por eso pongo id por ultimo //el id que ponga en la url sera parametro de mi funcion 
})

app.post('/produtos',(req,res,next)=>{ // post normalmente es usado para formularios
    const produto = bancoDeDatos.salvarProduto({
        nome: req.body.nome,// recordemos que req se refiere que es algo que pone el usuario del lado del cliente, siendo res la respuesta a ese pedido( request )
        preco: req.body.preco
    })
    res.send(produto) // este producto que recien creo el cliente, sera enviado de vuelta via json
})

app.put('/produtos/:id',(req,res,next)=>{  // el put lo vamos a usar para cambiar alguno de los valores de objetos ya existente, poniendo el id donde quiero poner este nuevo puedo remplazarlo
    const produto = bancoDeDatos.salvarProduto({
        id: req.params.id, // este valor lo recibo del paremetro en la url
        nome: req.body.nome,// estos valor quiero recibir del body 
        preco: req.body.preco
    })
    res.send(produto) 
})

app.delete('/produtos/:id',(req,res,next)=>{  // el put lo vamos a usar para cambiar alguno de los valores de objetos ya existente, poniendo el id donde quiero poner este nuevo puedo remplazarlo
    const produto = bancoDeDatos.excluirProdutos(req.params.id)// solo necesito del id para borrar el producto que quiera
    res.send(produto) 
})

app.listen(porta, ()=>{ // la app va a esta escuchando cualquier llamada por la puerta 3003
    console.log(`Servidor executando en esta porta ${porta}.`) // apensas un proceso puede ocupar una puerta
})