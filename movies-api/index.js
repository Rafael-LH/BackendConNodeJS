const path = require('path');
const express = require('express');
const cors = require('cors');
const { port } = require('./config/index');

const app = express();

// static files
const files = path.join(__dirname, './public');
app.use(express.static(files))

// config express
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // por si vallamos a trabajar con objetos muy grandes el extended true
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

// routes
app.get('/:year', (req, res) => {
  const { year } = req.params
  if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    res.status(200).send('El año es bisiesto');
  } else {
    res.status(200).send('El año no es bisiesto');
  }
})

// server listen
app.listen(port, () => {
  console.log(`La aplicacion esta corriendo en http://localhost:${port}`);
})
