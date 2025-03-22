const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Siddiqui736')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login in twitter</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Welcome to Youtube </h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})