// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");

const app = express(); // Creación de la aplicación de express
app.use(express.json()); // Middleware para que la aplicación entienda JSON y pueda recibir objetos en formato JSON
app.use(cors()); // Middleware para que la aplicación entienda CORS y permitir peticiones desde cualquier origen

// Rutas de la aplicación
app.use("/api", require("./routes/api.routes"));

// Esto es un manejador para los errores 404, por si la ruta no es capaz de encontrarla
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

/* manejador de errores de nuestras aplicaciones, 
todo lo que falle en nuestra aplicacion lo mando aqui para unificarlo todo y no hacerlo de manera individual*/

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

module.exports = app;
