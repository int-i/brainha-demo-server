const Department = require('../models/Department');
const pool = require('../database');

const findById = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM departments WHERE id = ?', [id]);
  const department = Department.create(row);
  return department;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM departments');
  const departments = rows.map(Department.create);
  return departments;
};

module.exports = {
  findById,
  getAll,
};
