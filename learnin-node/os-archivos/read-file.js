const fs = require('fs');

// recibe el dirname y un call back first error
fs.readdir(__dirname, (err, files) => {
  if (err) return err;

  // nos traera todos los archivos que tenemos en este directorio para poder manipularlos quiza con un map
  console.log(files);
});

