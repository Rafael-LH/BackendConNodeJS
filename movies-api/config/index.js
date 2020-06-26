require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  uri: process.env.URI,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassWord: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
}
module.exports = config;