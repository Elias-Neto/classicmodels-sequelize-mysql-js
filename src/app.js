const express = require('express')

const app = express()

require("./config/db")

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Classic Models API!" })
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
