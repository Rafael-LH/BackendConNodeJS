const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {

  if (req.method === 'POST' && req.url === '/echo') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hellow World');
  } else {
    res.statusCode = 400;
    res.end('Bad Request');
  }
})

server.listen(3001);
console.log('la aplicacion esta escuchando en http://localhost:3001');

