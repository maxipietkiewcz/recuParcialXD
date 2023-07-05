// const express = require("express");
// const reserva = express.reserva();
// const {
//   listarReservas,
//   crearReserva,
//   editarReserva,
//   eliminarReserva,
// } = require("../controllers/controllers");

// // Ruta para listar reservas
// reserva.get("/", listarReservas);

// // Ruta para crear una reserva

// reserva.post("/", crearReserva);

// // Ruta para editar una reserva
// reserva.put("/edit/:id", editarReserva);

// // Ruta para eliminar una reserva
// reserva.delete("/delete/:id", eliminarReserva);

// module.exports = reserva;

const express = require("express");
const reserva = express.Router();
const {
  listarReservas,
  mostrarFormularioCrear,
  guardarReserva,
  mostrarFormularioEditar,
  editarReserva,
  eliminarReserva,
} = require("../controllers/controllers");

// Ruta para mostrar la lista de reservas
reserva.get("/", listarReservas);

// Ruta para mostrar el formulario de creación de reserva
reserva.get("/crear", mostrarFormularioCrear);

// Ruta para guardar una nueva reserva
reserva.post("/crear", guardarReserva);

// Ruta para mostrar el formulario de edición de reserva
reserva.get("/editar/:id", mostrarFormularioEditar);

// Ruta para actualizar una reserva
reserva.post("/editar/:id", editarReserva);

// Ruta para eliminar una reserva
reserva.get("/eliminar/:id", eliminarReserva);

module.exports = reserva;
