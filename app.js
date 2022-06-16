const PORT = 3000

const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
app.use(express.json())

app.get('/', function(req, res){
    res.send('<h1>Hi guys</h1>')
})

app.post('/image', upload.single('image'), function(req, res){
    const body = req.body
    const file = req.file
    console.log(file)
    res.send('Hi there')
})

app.listen(PORT)

