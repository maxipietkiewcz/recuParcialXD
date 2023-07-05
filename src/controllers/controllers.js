const Reserva = require("../models/reserva.modelos");

const listarReservas = async (req, res) => {
  try {
    const respuesta = await Reserva.findAll();
    const reservas = await respuesta;
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

const crearReserva = async (req, res) => {
  try {
    const reserva = req.body;
    const respuesta = await Reserva.create(reserva);
    res.status(201).json(respuesta);
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

const editarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = req.body;
    const reservaEditada = await Reserva.update(reserva, { where: { id } });
    res.status(200).json(reservaEditada);
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

const eliminarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    await Reserva.destroy({ where: { id } });
    res.status(200).json({
      mensaje: `Reserva ${id} eliminada`,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

module.exports = {
  listarReservas,
  crearReserva,
  editarReserva,
  eliminarReserva,
};
