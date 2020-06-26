// , ObjectId
const { MongoClient } = require('mongodb');
const { dbUser, dbPassWord, dbHost, dbName, port } = require('../config');

// lo que hace esta fucion es en caso de que tenga mi cadena caracteres especiales no tenga problemas a la hora de hacer la conexion
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassWord);
const DB_NAME = dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${dbHost}:${port}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.cliente = new MongoClient(MONGO_URI, {
      useNewUrlParser: true, // es para tener la ultima configuracion.
    })
    this.dbName = DB_NAME;
  }

  connect() {
    // Si no tenemos una conexion entonces creamos una nueva conexion
    if (!MongoLib.connection) { // si un cliente ya se conecto utilizo esa conexion si no pues creo una conexion
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err)
          } else {
            console.log('Connected succesfully to mongo');
            resolve(this.client.db(this.dbName))
          }
        })
      })
    }
    // si existe la conexion la retorno aqui si no la creo dentro del if
    return MongoLib.connection;
  }
}
module.exports = MongoLib;