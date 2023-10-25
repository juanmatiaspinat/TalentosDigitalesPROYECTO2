import { pool } from './database.js';

class LibrosController {

    // Traer-Obtener todos los libros 
    async getAll(req, res) {
        const [resultado] = await pool.query('SELECT * FROM libros');
        res.json(resultado);
    }

    // Traer-Obtener libro por ID 
    async getOne(req, res) {
        const libro = req.body;
        const [resultado] = await pool.query(`SELECT * FROM libros WHERE id=(?)`, [libro.id]);
        res.json(resultado);
    }

    // Agregar un libro 
    async add(req, res) {
        const libro = req.body;
        const [resultado] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
        res.json({ "ID insertado": resultado.insertId });
    }

    // Eliminar un libro por ISBN
    async delete(req, res) {
        const libro = req.body;
        const [resultado] = await pool.query(`DELETE FROM libros WHERE isbn=(?)`, [libro.ISBN]);
        res.json({ "Registros eliminados por ISBN": resultado.affectedRows });
    }

    // Actualizar un libro
    async update(req, res) {
        const libro = req.body;
        const [resultado] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]);
        res.json({ "Registros actualizados": resultado.changedRows });
    }

}

export const libro = new LibrosController();
