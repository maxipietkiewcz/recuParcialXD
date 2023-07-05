// const Reservas = require("../models/reserva.modelos");

// const listarReservas = async (req, res) => {
//   try {
//     const respuesta = await Reservas.findAll();
//     const reservas = await respuesta;
//     res.status(200).json(reservas);
//     // res.render("index", { reservas: reservas });
//   } catch (error) {
//     res.status(500).json({
//       error: "Ocurrió un error en el servidor",
//     });
//     console.log(error);
//   }
// };

// const crearReserva = async (req, res) => {
//   try {
//     const reservas = req.body;
//     const respuesta = await Reservas.create(reservas);
//     res.status(201).json(respuesta);
//     // res.render("create", { reservas: respuesta });
//   } catch (error) {
//     res.status(500).json({
//       error: "Ocurrió un error en el servidor",
//     });
//     console.log(error);
//   }
// };

// const editarReserva = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const reserva = req.body;
//     const reservaEditada = await Reservas.update(reserva, { where: { id } });
//     res.status(200).json(reservaEditada);
//   } catch (error) {
//     res.status(500).json({
//       error: "Ocurrió un error en el servidor",
//     });
//     console.log(error);
//   }
// };

// const eliminarReserva = async (req, res) => {
//   try {
//     const id = req.params.id;
//     await Reservas.destroy({ where: { id } });
//     res.status(200).json({
//       mensaje: `Reserva ${id} eliminada`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "Ocurrió un error en el servidor",
//     });
//     console.log(error);
//   }
// };

// module.exports = {
//   listarReservas,
//   crearReserva,
//   editarReserva,
//   eliminarReserva,
// };

const Reservas = require("../models/reserva.modelos");

const listarReservas = async (req, res) => {
  try {
    const reservas = await Reservas.findAll();
    res.render("index", { reservas: reservas });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

const mostrarFormularioCrear = (req, res) => {
  res.render("create");
};

const guardarReserva = async (req, res) => {
  try {
    const reservas = req.body;
    const respuesta = await Reservas.create(reservas);
    res.redirect("/api/reservas");
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

const mostrarFormularioEditar = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = await Reservas.findByPk(id);
    res.render("editar", { reserva });
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
    await Reservas.update(reserva, { where: { id: id } });
    res.redirect("/api/reservas");
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
    await Reservas.destroy({ where: { id } });
    res.redirect("/api/reservas");
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error en el servidor",
    });
    console.log(error);
  }
};

module.exports = {
  listarReservas,
  mostrarFormularioCrear,
  guardarReserva,
  mostrarFormularioEditar,
  editarReserva,
  eliminarReserva,
};
