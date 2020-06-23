// Esta es una explicacion en caso de que nos llegue un dato muy grande y lo queremos manipular eso lo hacemos con los stream de node
// en un paquete nativo de node por lo tanto no requiere su instalacion del paquete, en este ejemplo estamos manipulando el 
// string que nos llega por consola el cual lo cambiaremos a camel case y en cuanto a memoria del sistema no consumira mucho de hecho puede
// que sea hasta el mismo consumo de memoria en el que estaba.
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, endcoding, callback) {
    const input = chunk.toString().toLowerCase().trim();
    let camelCase = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        camelCase += input[i + 1].toUpperCase();
        i++;
      } else {
        camelCase += input[i]
      }
    }
    this.push(camelCase);
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);

// Duplex y Transforms streams
//  Duplex: implementa los métodos write y read a la vez.
//  Transform: es similar a Duplex pero con una sintaxis más corta.