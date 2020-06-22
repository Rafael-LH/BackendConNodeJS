const EventEmmiter = require('events')

class Logger extends EventEmmiter {
  execute(cb) {
    console.log('Before');
    this.emit('start')
    cb(); // este callback se llamara en cuando ejecute mi Logger con logger.execute(()=>)
    this.emit('finish');
    console.log('After');
  }
}

const logger = new Logger();

// escuchamos los emit de nuestro Logger
logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('It\'s Done'));

// ejecutamos nuestro logger
logger.execute(() => console.log('Hello World'));