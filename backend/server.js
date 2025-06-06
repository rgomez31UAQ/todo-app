require('dotenv').config();
const app = require('./app');
const connectDB = require('./db/connection');

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);
  });
});
