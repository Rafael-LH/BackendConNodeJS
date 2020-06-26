const store = require('../services/movies');

class MoviesController {
  async getMovies() {
    const data = await store.getMovies();
    return data;
  }
}

module.exports = new MoviesController();