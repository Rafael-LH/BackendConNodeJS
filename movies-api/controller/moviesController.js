const store = require('../services/movies');

class MoviesController {
  async getMovies() {
    const data = await store.getMovies();
    return data;
  }

  async getMovie(id) {
    const data = await store.getMovie(id);
    return data
  }
}

module.exports = new MoviesController();