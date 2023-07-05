const express = require("express");
const router = express.Router();
const {
  listarReservas,
  crearReserva,
  editarReserva,
  eliminarReserva,
} = require("../controllers/controllers");

//ruta para listar reservas
router.get("/", listarReservas);

//ruta para crear una reserva
router.post("/", crearReserva);

//ruta para editar una reserva
router.put("/:id", editarReserva);

//ruta para eliminar una reserva
router.delete("/:id", eliminarReserva);

module.exports = router;
