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

  async createMovie(data) {
    await store.createMovie(data);
    return data;
  }

  async updateMovie(id) {
    await store.updateMovie(id);
    return 'Updated'
  }
}

module.exports = new MoviesController();