import { modeloHabitacion } from "../models/modeloHabitacion.js";

export class ServicioHabitacion {
  constructor() { }

  async registrar(datosHabitacion) {
    let habitacionNueva = new modeloHabitacion(datosHabitacion);
    return await habitacionNueva.save();
  }

  async buscarTodas() {
    return await modeloHabitacion.find();
  }

  async buscarPorId(idHabitacion) {
    return await modeloHabitacion.findById(idHabitacion);
  }

  async editar(idHabitacion, datosHabitacion) {
    return await modeloHabitacion.findByIdAndUpdate(
      idHabitacion,
      datosHabitacion
    );
  }

  async eliminar(idHabitacion) {
    return await modeloHabitacion.findByIdAndDelete(idHabitacion);
  }
}
