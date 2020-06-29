const { dev } = require('../../config');


function withErrorStack(error, stack) {
  if (dev) {
    return {
      error,
      stack
    }
  }
  return error;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err); // llama al siguiente middleware del error
}

function errorHandle(err, req, res, next) { // eslint-disable-line
  res.status(err.status || 500)
  res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
  logErrors,
  errorHandle
}