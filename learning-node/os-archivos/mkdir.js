const fs = require('fs')

// el segundo parametro es para qie nos cree las carpetas de / platzi / escuela - js / node en caso de que no las encuentre
fs.mkdir('platzi/escuela-js/node', { recursive: true }, (err) => {
  // como no vamos a recibir nada esto lo veremos en nuestro directorio reflejado pues solo nos vamos asegurar de que no falle
  // y si falla pues notificar ese error 

  if (err) return console.error(err)
})