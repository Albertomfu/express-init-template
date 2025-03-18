// Server creation and configuration
const http = require("node:http");
const app = require("./src/app"); // Importamos todo lo que tiene el archivo app.js

// Config .env, lectura del fichero de entorno donde van todo los datos de MySQL(nombre de la base de datos, usuario, contraseña, etc)
require("dotenv").config();

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// Puesta en marcha del servidor
server.listen(PORT);

// Listeners
server.on("listening", () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});
