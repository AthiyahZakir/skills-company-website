const express = require('express')
const cors = require('cors')
require('dotenv').config()

const formRoute = require('./routes/form')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api', formRoute)

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})