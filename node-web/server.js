const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hellow World')
})

server.listen(3000);
console.log('la aplicacion esta escuchando en http://localhost:3000');

