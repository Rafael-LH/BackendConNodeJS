const fs = require('fs');

//primero nos posicionamos en le directorio donde estan estos scripts y corremos el scritp file.txt
try {
  // leeremos el segundo argumento que pasaremos por consola que en este caso vamos a pasar el file
  const file = process.argv[2];

  //leemos el archivos que nos llega
  const content = fs.readFileSync(file).toString();

  const lines = content.split('\n').length;
  console.log(`El archivo cuenta con ${lines} lineas`);

} catch (err) {
  console.error(err)
}