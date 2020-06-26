/**
 * aqui estara todas nuestra conexiones con al base de datos, en algunas convenciones lo llaman store
 */
const moviesMock = require('../utils/mocks/movies.json');

class MoviesServices {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock)
    return movies || [];
  }

  async getMovie(id) {
    const data = await moviesMock.find(item => item.id === id);
    return data || {};
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