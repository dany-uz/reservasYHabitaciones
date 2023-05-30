import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva {
  constructor() { }

  async registrar(datosReserva) {
    let reservaNueva = new modeloReserva(datosReserva);
    return await reservaNueva.save();
  }

  async buscarTodas() {
    return await modeloReserva.find();
  }

  async buscarPorId(idReserva) {
    return await modeloReserva.findById(idReserva);
  }

  async editar(idReserva, datosReserva) {
    return await modeloReserva.findByIdAndUpdate(idReserva, datosReserva);
  }

  async eliminar(idReserva) {
    return await modeloReserva.findByIdAndDelete(idReserva);
  }
}
