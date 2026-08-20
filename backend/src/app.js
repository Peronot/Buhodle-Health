const express = require('express')
const cors = require('cors')
const env = require('./config/env')
const healthRoutes = require('./routes/healthRoutes')
const { notFound, errorHandler } = require('./middleware/errorHandler')

const app = express()

app.use(cors({ origin: env.clientUrl }))
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the backend API' })
})

app.use('/api', healthRoutes)

app.use(notFound)
app.use(errorHandler)

module.exports = app
