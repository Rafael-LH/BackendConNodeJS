const util = require('util');

// esto nos sirve cuando estamos haciendo refactor y queremos avisarle al usuario que hay unas funcionalidades
// que quizas posteriormente o en versiones siguientes desaparecera por completo
const helloPluto = util.deprecate(() => {
  console.log('hello pluto')
}, 'Pluto is deprecated');

helloPluto();
/**
 * de la siguiente manera podemos hacer debug en NodeJS
 * node --inspect console-class.js
 */