const { MongoClient, ObjectId } = require('mongodb');
const { dbUser, dbPassWord, dbHost, dbName } = require('../config');

// lo que hace esta fucion es en caso de que tenga mi cadena caracteres especiales no tenga problemas a la hora de hacer la conexion
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassWord);
const DB_NAME = dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${dbHost}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useUnifiedTopology: true // es para tener la ultima configuracion.
    });
    this.dbName = DB_NAME;
  }

  // conexion a mi base de datos
  connect() {
    // Si no tenemos una conexion entonces creamos una nueva conexion
    if (!MongoLib.connection) {// si un cliente ya se conecto utilizo esa conexion si no pues creo una conexion
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }
          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    // si existe la conexion la retorno aqui si no la creo dentro del if
    return MongoLib.connection;
  }

  async getAll(collection, query) {
    const db = await this.connect();
    return await db.collection(collection).find(query).toArray();
  }
  async get(collection, id) {
    const db = await this.connect();
    return await db.collection(collection).findOne({ _id: ObjectId(id) });
  }
  async create(collection, data) {
    const db = await this.connect();
    const result = await db.collection(collection).insertOne(data);
    return result || db.insertedId;
  }
  async update(collection, id, data) {
    console.log(data);

    const db = await this.connect();
    const result = await db.collection(collection).updateOne(
      { _id: ObjectId(id) },
      { $set: data },
      { upsert: true }
    );
    return result.upsertedId || id;
  }
  async delete(collection, id) {
    const db = await this.connect();
    const result = await db.collection(collection).deleteOne({ _id: ObjectId(id) });
    return result || id
  }
}
module.exports = MongoLib;