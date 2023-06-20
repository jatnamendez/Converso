import  express  from "express";
import cors from 'cors'
//importamos la conexion a la DB
import db from './database/db.js'
//importamos nuestro enrutador
import productoRouters from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/productos',productoRouters)

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})
