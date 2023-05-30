import { ServicioHabitacion } from "../services/ServicioHabitacion.js";

export class ControladorHabitaciones {
    constructor() { }

    async registrandoHabitacion(peticion, respuesta) {
        let objetoServicioHabitacion = new ServicioHabitacion();

        try {
            let datosHabitacion = peticion.body;

            if (datosHabitacion.precio <= 0) {
                respuesta.status(400).json({
                    mensaje: "Problemas con la validación de precio",
                });
            } else if (datosHabitacion.numeropersonas < 1) {
                respuesta.status(400).json({
                    mensaje: "Problemas con la validación de personas",
                });
            } else {
                await objetoServicioHabitacion.registrar(datosHabitacion);
                respuesta.status(200).json({
                    mensaje: "exito agregando datos",
                });
            }   
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async buscandoHabitacion(peticion, respuesta) {
        let objetoServicioHabitacion = new ServicioHabitacion();

        try {
            let idHabitacion = peticion.params.idhabitacion;

            respuesta.status(200).json({
                mensaje: "exito buscando la habitacion",
                habitacion: await objetoServicioHabitacion.buscarPorId(idHabitacion),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async buscandoHabitaciones(peticion, respuesta) {
        let objetoServicioHabitacion = new ServicioHabitacion();

        try {
            respuesta.status(200).json({
                mensaje: "exito buscando habitaciones",
                habitaciones: await objetoServicioHabitacion.buscarTodas(),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async editandoHabitacion(peticion, respuesta) {
        let objetoServicioHabitacion = new ServicioHabitacion();

        let idHabitacion = peticion.params.idhabitacion;
        let datosHabitacion = peticion.body;

        try {
            await objetoServicioHabitacion.editar(idHabitacion, datosHabitacion);
            respuesta.status(200).json({
                mensaje: "exito editando habitacion",
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async eliminandoHabitacion(peticion, respuesta) {
        let objetoServicioHabitacion = new ServicioHabitacion();
        let idHabitacion = peticion.params.idhabitacion;

        try {
            await objetoServicioHabitacion.eliminar(idHabitacion);
            respuesta.status(200).json({
                mensaje: "exito eliminando habitacion",
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }
}
