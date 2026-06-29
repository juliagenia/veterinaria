import {Turno} from '../models/index.js';

const turnosController = {
    // GET /productos -> devuelve todos los productos.
    obtener: async (req, res) => {
        try {
            // findAll() trae todos los registros de la tabla productos.
            const data = await Turno.findAll();
            res.json({
                estado: true,
                data,
            });
        } catch (error) {
            console.error('Error al obtener turno:', error);
            res.status(500).json({
                estado: false,
                mensaje: 'Error al obtener turnos',
                error: error.message,
            });
        }
    },

    // GET /productos/:id -> devuelve un producto por su id.
    obtenerPorId: async (req, res) => {
        try {
            // req.params.id es el id que viene en la URL.
            const id = parseInt(req.params.id, 10);

            // findByPk busca un registro por su clave primaria.
            const data = await Turno.findByPk(id);

            if (!data) {
                // 404 significa "no encontrado".
                return res.status(404).json({
                    estado: false,
                    mensaje: 'Turno no encontrado',
                });
            }

            res.json({
                estado: true,
                data,
            });
        } catch (error) {
            console.error('Error al obtener turno:', error);
            res.status(500).json({
                estado: false,
                mensaje: 'Error al obtener turno',
                error: error.message,
            });
        }
    },

};

export default turnosController;