import express from 'express'
import { client } from './database'
import routes from './routes'
import corsMiddleware from './app/middlewares/cors'

const app = express()

app.use(express.json())
app.use(corsMiddleware)
app.use(routes)

app.listen(3333, () => {
  console.log('🔥 Started the server')
})

client.connect(() => {
  console.log('🔥Connected with database')
})
