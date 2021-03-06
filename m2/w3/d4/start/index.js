
const express = require('express')

const app = express()
const port = 3000

app.use(express.static("start"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:3000');
})