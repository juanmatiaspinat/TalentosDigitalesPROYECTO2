import { pool } from './database.js';

class LibrosController {

    // Traer-Obtener todos los libros 
    async getAll(req, res) {
        try {
            const [resultado] = await pool.query('SELECT * FROM libros');
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ "Error": "Error al intentar obtener los libros." });
        }
    }

    // Traer-Obtener libro por ID 
    async getOne(req, res) {
        try {
            const libro = req.body;
            const [resultado] = await pool.query(`SELECT * FROM libros WHERE id=(?)`, [libro.id]);
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
            res.status(400).json({ "Error": "No se encontro ningun libro con ese ID." });
            }
        } catch (error) {
            res.status(500).json({ "Error": "Error al intentar obtener el libro por ID." });
        }
    }

    // Agregar un libro 
    async add(req, res) {
        try {
            const libro = req.body;
            const [resultado] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
            res.json({ "ID insertado": resultado.insertId });
        } catch (error) {
            res.status(500).json({ "Error": "Error al intentar agregar el libro." });
        }

    }

    // Eliminar un libro por ISBN
    async delete(req, res) {
        try {
            const libro = req.body;
            const [resultado] = await pool.query(`DELETE FROM libros WHERE isbn=(?)`, [libro.ISBN]);
            if (resultado.affectedRows > 0) {
                res.json({ "Registros eliminados por ISBN": resultado.affectedRows });
            } else {
                res.status(404).json({ "Error": "No se encontro ningun libro con ese ISBN" });
            }
        } catch (error) {
            res.status(500).json({ "Error": "Error al intentar borrar el libro." });
        }
    }

    // Actualizar un libro
    async update(req, res) {
        try {
            const libro = req.body;
            const [resultado] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]);
            if (resultado.affectedRows > 0) {
                res.json({ "Registros actualizados": resultado.changedRows });
            } else {
                res.status(404).json({ "Error": "No se encontro ningun libro con ese ISBN" });
            }
        } catch (error) {
            res.status(500).json({ "Error": "Error al intentar actualizar el libro." });
        }
    }

}

export const libro = new LibrosController();
