require('dotenv').config()
const express = require('express')

const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
    res.send('<h2>heleo w<h2/>')
})

app.listen( port, () => {
  console.log(`Example app listening on port ${port}`)
})