const moviesMock = require('../utils/mocks/movies.json');

class MoviesServices {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock)
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0])
    return movie || {};
  }

  async createMovie() {
    const movie = await Promise.resolve(moviesMock[0])
    return movie
  }

  async updateMovie() {
    const movie = await Promise.resolve(moviesMock[0])
    return movie
  }

  async deleteMovie() {
    const movie = await Promise.resolve(moviesMock[0])
    return movie
  }
}

module.exports = new MoviesServices();