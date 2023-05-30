import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitacion = new ControladorHabitaciones()
let controladorReserva = new ControladorReservas()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas = express.Router()

// Rutas de Habitaciones
rutas.get('/buscarhabitaciones', controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion', controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion', controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion', controladorHabitacion.editandoHabitacion)
rutas.delete('/eliminarhabitacion/:idhabitacion', controladorHabitacion.eliminandoHabitacion)

// Rutas de Reservas
rutas.get('/buscarreservas', controladorReserva.buscandoReservas)
rutas.get('/buscarreserva/:idreserva', controladorReserva.buscandoReserva)
rutas.post('/registrarreserva', controladorReserva.registrandoReserva)
rutas.put('/editarreserva/:idreserva', controladorReserva.editandoReserva)
rutas.delete('/eliminarreserva/:idreserva', controladorReserva.eliminandoReserva)
