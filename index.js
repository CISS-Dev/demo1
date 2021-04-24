const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

const port = process.env.PORT || 4000

app.listen(port)
console.log(`app is listening on port: ${port}`)