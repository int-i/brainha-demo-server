const Board = require('../models/Board');
const pool = require('../database');

const create = async (name, { description = null, type = -1, categoryId = -1 } = {}) => {
  await pool.query('INSERT INTO boards (name, description, type, categoryId) VALUES (?, ?, ?, ?, ?)', [name, description, type, categoryId]);
  const [[row]] = await pool.query('SELECT * FROM boards WHERE name = ?', [name]);
  const board = Board.create(row);
  return board;
};

const findById = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM boards WHERE id = ?', [id]);
  const board = Board.create(row);
  return board;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM boards');
  const boards = rows.map(Board.create);
  return boards;
};

const update = async (id, data) => {
  await pool.query(`UPDATE boards SET ${Object.entries(data).map((key, value) => `${key} = ${value}`).join(', ')} WHERE id = ?`, [id]);
};

module.exports = {
  create,
  findById,
  getAll,
  update,
};
