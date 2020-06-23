const fs = require('fs');

// tambien podemos pasarlo por consola el nuevo archivo y pasarselo en el copyFile
// const file = process.argv[2]

fs.copyFile('naranja.txt', 'limon.txt', (err) => {
  if (err) console.error(err)
})