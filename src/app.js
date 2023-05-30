const express = require('express')

const app = express()
app.use(express.json())

require("./config/db")

const router = require('./routes')

app.use(router)

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Classic Models API!" })
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
