const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // esta es la responsable por mostrarme la pagina index en el localhost:8080/
app.use(bodyParser.urlencoded({ extended: true })) // si recibimos alguna info de algun formulario con este lo pasamos a objeto
app.use(bodyParser.json()) // si revibimos un json este codigo lo pasara a objeto

const multer = require('multer')

const storage = multer.diskStorage({ // dos metodos recomendado para guardar archivos cuando se hace un upload
    destination: function(req, file, callback){ // esta es la forma de setear un ruta de upload, donde se iran a guardar los archivos
        callback(null, './upload')
    },
    filename: function(req, file, callback){ // y setearle un nombre para evitar que se reescriban si por acaso tienen el mismo nombre
        callback(null, `${Date.now()}_${file.originalname}`) // una buena tecnica es meterle la fecha del momento que fue subido 
    }
})
const upload = multer({ storage }).single('arquivo') //tener en cuenta que arquivo es el name del input en mi pagina // creamos una funcion que va a interpretar el upload que viene via requisison, hace lo pedido en storage y recibe un file por el nombre de arquivo
app.post('/upload', (req,res)=>{ // se recibira una requisicion tipo post 
    upload(req,res,err =>{ // esta es la callback de la requisicion, cuando se ejecute puede dar un error o un succeso
        if(err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluido con sucesso.')
    })
})

app.post('/formulario', (req, res)=>{
    res.send({ // quiero que me devuelva todo lo que venga en el body mas el id como 1
        ...req.body, 
        id:1
    })
})

app.get('/parOuImpar', (req, res)=>{
    //formas de recibir data
    // req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero)% 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...')) // abrimos el servidor en el puerto 8080
