import app from "./src/app.js"
import 'dotenv/config'
import connectDatabase from "./src/config/database.js"
import dns from 'node:dns'

dns.setServers(['8.8.8.8', '8.8.4.4'])

const PORT = process.env.PORT || 9393

async function startServer() {
    await connectDatabase()

    app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta http://localhost:${PORT}`)
    })

}

startServer()

