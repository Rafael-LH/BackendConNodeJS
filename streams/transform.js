// Esta es una explicacion en caso de que nos llegue un string muy grande y lo queremos manipular eso lo hacemos con los stream de node
// en un paquete nativo de node por lo tanto no requiere su instalacion del paquete, en este ejemplo estamos manipulando el 
// string que nos llega por consola el cual lo cambiaremos a mayusculas y en cuanto a memoria del sistema no consumira mucho de hecho puede
// que sea hasta el mismo
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, endcoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);

// Duplex y Transforms streams
//  Duplex: implementa los métodos write y read a la vez.
//  Transform: es similar a Duplex pero con una sintaxis más corta.