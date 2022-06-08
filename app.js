const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function(req, res){
    res.send('<h1>Hi guys</h1>')
})

app.listen(PORT)

