const express = require('express');
const moviesMock = require('../utils/mocks/movies.json');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock);
      res.status(200).send({
        data: movie,
        message: 'Get all movies'
      })
    } catch (err) {
      next(err);
    }
  })
}
module.exports = moviesApi;