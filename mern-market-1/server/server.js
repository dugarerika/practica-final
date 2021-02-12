import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL  // config.mongoUri = 'mongodb://localhost/mernproject'
mongoose.Promise = global.Promise;
mongoose.connect(/* "mongodb://localhost/mernproject" */
config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
// Puesto por * Al
/* mongoose.connection.on("open", () => {
  console.log("Conectado a MongoDB en ", mongoose.connection.name);
}); */

mongoose.connection.on("error", () => {
  throw new Error(
    `unable to connect to database: ${"mongodb://localhost/mernproject"}`,
    console.log("Error de conexión", err),
    process.exit(1),
  );
});

app.listen(config.port, err => {
  if (err) {
    console.log(err);
  }
  console.info("Servidor iniciado en el puerto %s.", config.port);
});

 // module.exports = mongoose.connection;
