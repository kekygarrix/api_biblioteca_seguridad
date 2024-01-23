const express = require("express");
const app = express();
app.use(express.json());
const { auth } = require("express-oauth2-jwt-bearer");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
  audience: "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
// Importamos el Middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

//Configuramos el middleware de autenticacion
app.use("/libros", librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
