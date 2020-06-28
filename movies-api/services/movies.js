/**
 * aqui estara todas nuestra conexiones con al base de datos, en algunas convenciones lo llaman store
 */
const MongoLib = require('../lib/mongo');

class MoviesServices {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }
  async getMovies({ tags } = {}) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query)
    return movies || [];
  }

  async getMovie(movieId) {
    const data = await this.mongoDB.get(this.collection, movieId)
    return data || {};
  }

  async createMovie(movie) {
    const data = await this.mongoDB.create(this.collection, movie)
    return data;
  }

  // en caso de que no venga nada lo inicializo como un objeto vacio
  async updateMovie(movieId, movie = {}) {
    const result = await this.mongoDB.update(this.collection, movieId, movie)
    return result;
  }

  async deleteMovie(movieId) {
    const result = await this.mongoDB.delete(this.collection, movieId)
    return result;
  }
}

module.exports = new MoviesServices();