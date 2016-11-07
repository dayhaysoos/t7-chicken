const fs = require('fs')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/test', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.send(JSON.stringify({ success: true })).end()
})

// TODO: set up a generic static route (to make serving CSS and HTML easier)

app.get('/bundle.js', (req, res) => {
  res.set('Content-Type', 'application/javascript')
  fs.readFile('./build/bundle.js', 'utf8', (err, data) => {
    if (err) res.status(500).send('Something broke!').end()
    res.send(data).end()
  })

})

// For all other routes, just serve up index.html:
app.get('/*', (req, res) => {
  res.set('Content-Type', 'text/html')

  fs.readFile('./build/index.html', 'utf8', (err, data) => {
    if (err) res.status(500).send('Something broke!').end()
    res.send(data).end()
  })
})

app.listen(PORT)
console.log(`Started app on port ${PORT}`)
