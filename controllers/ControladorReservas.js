import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReservas {
    constructor() { }

    async registrandoReserva(peticion, respuesta) {
        let data = peticion.body;
        let dateStart = new Date(data.fechaInicioReserva);
        let dateEnd = new Date(data.fechaFinalReserva);
        let diff = (dateEnd - dateStart) / (1000 * 60 * 60 * 24);

        try {
            let objetoServicioReserva = new ServicioReserva();
            let objetoServicioHabitacion = new ServicioHabitacion();
            let habitacion = await objetoServicioHabitacion.buscarPorId(data.idHabitacion);


            if (habitacion != null) {
                // Precio total
                data.precioTotal = habitacion.precio * diff;

                // Validación fecha
                if (dateStart >= dateEnd) {
                    respuesta.status(400).json({
                        mensaje: "Problemas con la validación de fechas",
                    });
                }
                // Validación personas
                else if (data.numeroAdultos < 1 && data.numeroNinos > 5) {
                    respuesta.status(400).json({
                        mensaje: "Problema con la validación de personas",
                    });
                }
                // Validación habitación
                else {
                    await objetoServicioReserva.registrar(data);
                    respuesta.status(200).json({
                        mensaje: "Datos agregados con éxito",
                        "valueDay": diff,
                    });
                }
            } else {
                respuesta.status(400).json({
                    mensaje: "fallamos en la operacion " + error,
                });
            }
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async buscandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        try {
            let idReserva = peticion.params.idreserva;
            respuesta.status(200).json({
                mensaje: "exito buscando la reserva",
                reserva: await objetoServicioReserva.buscarPorId(idReserva),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async buscandoReservas(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        try {
            respuesta.status(200).json({
                mensaje: "exito buscando reservas",
                reservas: await objetoServicioReserva.buscarTodas(),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async editandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        let idReserva = peticion.params.idreserva;
        let datosReserva = peticion.body;

        try {
            await objetoServicioReserva.editar(idReserva, datosReserva);
            respuesta.status(200).json({
                mensaje: "exito editando la reserva",
                reserva: await objetoServicioReserva.buscarPorId(idReserva),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async eliminandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        let idReserva = peticion.params.idreserva;

        try {
            await objetoServicioReserva.eliminar(idReserva);
            respuesta.status(200).json({
                mensaje: "exito eliminando la reserva",
                reserva: await objetoServicioReserva.buscarPorId(idReserva),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }
}
