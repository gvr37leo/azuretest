var express = require('express')
var app = express()
var port = 80

app.use(express.static('./'))

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})