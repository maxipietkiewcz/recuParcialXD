const express = require("express");
const app = express();
require("dotenv").config();

//requiriendo middleware
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
//requiriendo body parser
const bodyParser = require("body-parser");
//Configuracion de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("public"));

//requiriendo config donde esta nuestra base de datos
const { db_connection } = require("./src/config/db.js");
//conexion a la base de datos
db_connection();

//requiriendo las rutas
const reserva = require("./src/routes/routes.js");
//configuracion de las rutas
app.use("/api/reservas", reserva);

//Levantar el servidor
const puerto = process.env.PORT || 4000;
app.listen(puerto, () => {
  console.log(
    "El server esta conectado en http://localhost:" + puerto + "/api/reservas"
  );
});

// TODO: Implementar middlewares