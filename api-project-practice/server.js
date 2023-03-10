const express = require ('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
require('dotenv').config()


let db
let dbConnectionStr = process.env.DB_STRING
let dbName = "todo"

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

app.get("/", (req, res) => {
    db.collection("todo").find().sort({"likes": -1}).toArray()
    .then(data => {
        res.render('index.ejs', { items: data})
    }) 
    .catch(err => console.error(err))

    // res.sendFile(__dirname + "/index.html")
})

app.post("/addName", (req, res) => {
    db.collection("todo").insertOne({name: req.body.name, likes: 0})
    .then(result => {
        console.log('Name Added')
        res.redirect("/")
    })
    .catch(err => console.error(err))
})

app.delete("/deleteItem", (req, res) => {
    console.log(req.body.itemsFromJS)
    db.collection("todo").deleteOne({name: req.body.itemsFromJS})
    .then(result => {
        console.log("Name deleted")
        res.json("Name deleted")
    })
    .catch(err => console.err(err))
})

app.put("/addLike", (req, res) => {
    db.collection("todo").updateOne({name: req.body.itemsFromJS}, {
        $inc: {
            likes: 1 
        }
    }, {
        sort: {"likes": -1},
        upsert: false
    })
    .then(result => {
        console.log('Added a like')
        res.json('Added a like')
    })
    .catch(err => console.error(err))
})


