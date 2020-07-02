const path = require('path');
const express = require('express');
const cors = require('cors');
const { port } = require('./config/index');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')

const notFoundHandler = require('./utils/middleware/notFoundHandler')

const app = express();

// static files
const files = path.join(__dirname, './public');
app.use(express.static(files))

// config express
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // por si vayamos a trabajar con objetos muy grandes como por ejemplo archivos de 
// tipo file que su binario es muy grande por lo tanto manejaremos una cadena muy grande para eso es el extended true
// Para datos tipo application/x-www-form-urlencoded
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

// routes
const router = require('./routes/movies')
router(app);

//catch 404 not found
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);


// server listen
app.listen(port, () => {
  console.log(`La aplicacion esta corriendo en http://localhost:${port}`);
})

//change
// app.get('/:year', (req, res) => {
//   const { year } = req.params
//   if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
//     res.status(200).send('El año es bisiesto');
//   } else {
//     res.status(200).send('El año no es bisiesto');
//   }
// })
