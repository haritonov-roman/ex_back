const db = require('../db');

class UserController {
  async createUser(req, res) {
    const { name } = req.body;

    const newUser = await db.query(
      'INSERT INTO users (name) values ($1) RETURNING *',
      [name]
    );

    res.status(200).json(newUser.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM users');

    res.status(200).json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;

    const user = await db.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );

    res.status(200).json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { id, name } = req.body;

    const updatedUser = await db.query(
      'UPDATE users SET name = $1 WHERE id = $2 RETURNING *',
      [name, id]
    );
    
    res.status(200).json(updatedUser.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;

    await db.query(
      'DELETE FROM users WHERE id = $1',
      [id]
    )

    res.status(200).json('done');
  }
}

module.exports = new UserController();