import app from "./app.js"
import 'dotenv/config'

const PORT = process.env.PORT || 9393

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta http://localhost:${PORT}`)
})
