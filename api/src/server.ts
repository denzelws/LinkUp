import express from 'express'
import { client } from './database'
import routes from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log('🔥 Started the server')
})

client.connect(() => {
  console.log('🔥Connected with database')
})
