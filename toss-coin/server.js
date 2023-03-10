const express = require('express')
const app = express()

app.set('view engine', 'ejs' )
app.use(express.static('public  '))

app.listen(3000, _ => {
    console.log('listening on port 3000')
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log(Math.round(Math.random()) ? 'heads' : 'tails')
})

