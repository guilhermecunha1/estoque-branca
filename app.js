import express from 'express'
import errorHandler from './middlewares/errorHandler.js'
import fabricRoutes from './src/routes/fabricRoutes.js'


const app = express()   
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Definição de endpoints
app.use('/fabrics', fabricRoutes)

//Middlewares
app.use(errorHandler)


export default app