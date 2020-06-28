const express = require('express');
const services = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const { tags } = req.query;
      const movie = await services.getMovies(tags);
      res.status(200).send({
        result: movie,
        message: 'Get all movies'
      })
    } catch (err) {
      next(err);
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
      const movie = await services.getMovie(req.params.id);
      res.status(200).send({
        result: movie,
        message: 'Get movie'
      })
    } catch (err) {
      next(err);
    }
  })

  router.post('/', async (req, res, next) => {
    try {
      const { result } = await services.createMovie(req.body);
      res.status(201).send({
        result,
        message: 'Created movie'
      })
    } catch (err) {
      next(err);
    }
  })

  router.patch('/:id', async (req, res, next) => {
    try {
      const updatedMovieId = await services.updateMovie(req.params.id, req.body)
      res.status(200).send({
        result: updatedMovieId,
        message: 'Updated movie'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    try {
      const { result } = await services.deleteMovie(req.params.id)
      res.status(200).send({
        result,
        message: 'Deleted movie'
      })
    } catch (err) {
      next(err);
    }
  })
}
module.exports = moviesApi;