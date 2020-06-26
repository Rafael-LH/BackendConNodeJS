const express = require('express');
const controller = require('../controller/moviesController');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movie = await controller.getMovies();
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
      const movie = await controller.getMovie(req.params.id);
      res.status(200).send({
        result: movie,
        message: 'Get movie'
      })
    } catch (err) {
      next(err);
    }
  })

  // router.post('/', async (req, res, next) => {
  //   try {
  //     const createdMovieId = await Promise.resolve(moviesMock[0].id);
  //     res.status(201).send({
  //       result: createdMovieId,
  //       message: 'Created movie'
  //     })
  //   } catch (err) {
  //     next(err);
  //   }
  // })

  // router.patch('/:id', async (req, res, next) => {
  //   try {
  //     const updatedMovieId = await Promise.resolve(moviesMock[0].id);
  //     res.status(200).send({
  //       result: updatedMovieId,
  //       message: 'Updated movie'
  //     })
  //   } catch (err) {
  //     next(err)
  //   }
  // })

  // router.delete('/:id', async (req, res, next) => {
  //   try {
  //     const deleteMovieId = await Promise.resolve(moviesMock[0].id);
  //     res.status(200).send({
  //       result: deleteMovieId,
  //       message: 'Deleted movie'
  //     })
  //   } catch (err) {
  //     next(err);
  //   }
  // })
}
module.exports = moviesApi;