const fs = require('fs');

//primero nos posicionamos en le directorio donde estan estos scripts y corremos el scritp file.txt
// leeremos el segundo argumento que pasaremos por consola que en este caso vamos a pasar el file
const file = process.argv[2];

if (!file) {
  throw new Error('El segundo parametro tiene que ser el archivo (.txt) a leer')
}


//leemos el archivos que nos llega

// de esta manera se hace asincrono no necesitamos el metodo readFileSync porque node por defecto busca hacerlo asincrono
fs.readFile(file, (err, content) => {
  if (err) return err;

  const lines = content.toString().split('\n').length;
  console.log(`El archivo cuenta con ${lines} lineas`);
})

