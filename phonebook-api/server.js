const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 8000
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generateID = () => {
  const maxID = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
  return maxID + 1
}

app.use(express.json())
app.use(morgan('tiny'))

app.get("/api/persons", (req, res) => {
    res.json(persons)

})

app.get("/info", (req, res) => {
})

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

app.post("/api/persons", (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "Content missing"
    })
  }

  if (persons.filter(person => person.name == body.name).length > 0) {
    return res.status(400).json({
      error: "Person is already in database"
    })
  }

  const person = {
    "id": generateID(),
    "name": body.name,
    "number": body.number
  }

  persons.push(person)
  console.log(person)
  res.json(person)
})

app.listen(PORT, () => {
    console.log(`Connected at port: ${PORT}!`)
})