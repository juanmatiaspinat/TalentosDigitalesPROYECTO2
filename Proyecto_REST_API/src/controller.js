import { pool } from './database.js';

class LibrosController {

    async getAll(req, res) {
        const [resultado] = await pool.query('SELECT * FROM libros');
        res.json(resultado);
    }

    async getOne(req, res) {
        const libro = req.body;
        const [resultado] = await pool.query(`SELECT FROM libros WHERE id=(?)`, [libro.id]);
        //res.json(resultado);
        res.json(resultado);
    }

    async add(req, res) {
    const libro = req.body;
    const [resultado] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
    res.json({ "ID insertado": resultado.insertId });
}

    async delete (req, res) {
    const libro = req.body;
    const [resultado] = await pool.query(`DELETE FROM libros WHERE id=(?)`, [libro.id]);
    res.json({ "Registros eliminados": resultado.affectedRows });
}

    async update(req, res) {
    const libro = req.body;
    const [resultado] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]);
    res.json({ "Registros actualizados": resultado.changedRows });
}

}

export const libro = new LibrosController();
