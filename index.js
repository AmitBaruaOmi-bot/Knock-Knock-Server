const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./server')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api', require("./routes/user.routes"))
app.listen(port, () => {
  console.log(`You are connected to port ${port}`)
})

