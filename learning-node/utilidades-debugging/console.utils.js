/**
 * Consola, utilidades y debugging
 */
// %s string
// %d digito
// %j json

// es como se hacia en lenguaje C 
console.log('Un %s y un %s', 'perrito', 'gatito');

// el console.info es un alias de un console.log, no cambia para nada
console.info("Hello World")
// este tambien es un alias de un console.log
console.warn("Hello error")

/**
 * nos muestra si hay un error en un boleado
 * el siguiente codigo nos saltara un error por consola de (Assertion failed)
 * porque la comparacion  es exacta y esto saltara un error porque no es lo mismo
 */
console.assert(42 === "42")

// Nos indica la linea donde esta ocurriendo el error, en este caso informara que sera la linea 21
console.trace("hello")

/**
 * esto se usa para poder hacer debugging del lado del backend
 * para que funcione lo siguiente tenemos que pasarlo como variable de entorno con
 * NODE_DEBUG=foo node console.utils
 * y de esta manera ya podriamos utilizar debugging del lado del servidor
 */

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog("Hola mundo")