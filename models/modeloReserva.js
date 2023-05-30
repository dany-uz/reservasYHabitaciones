import mongoose from "mongoose";

let Schema = mongoose.Schema;

const Reserva = new Schema({
  idHabitacion: {
    type: String,
    required: true,
  },
  nombreCliente: {
    type: String,
    required: true,
  },
  apellidoCliente: {
    type: String,
    required: true,
  },
  telefonoCliente: {
    type: String,
    required: true,
  },
  fechaInicioReserva: {
    type: Date,
    required: true,
  },
  fechaFinalReserva: {
    type: Date,
    required: true,
  },
  numeroAdultos: {
    type: Number,
    required: true,
  },
  numeroNinos: {
    type: Number,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
  }
});

export const modeloReserva = mongoose.model('reservas', Reserva)