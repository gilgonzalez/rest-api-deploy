import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middleware/cors.js'
// ? COMO LEER UN JSON EN ES MODULES
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

//! import movies from './movies.json' --> ESTO NO ES VALIDO
//* import movies from './movies.json' with { type : json} --> ESTO ESTARÁ BIEN EN EL FUTURO
// Por ahora, hacerlo con esto

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
