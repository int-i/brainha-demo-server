const User = require('../models/User');
const { sha512 } = require('../utils');
const pool = require('../database');

const create = async (sid, password, {
  name = null, departmentId = -1, email = null, profileUrl = null,
} = {}) => {
  await pool.query('INSERT INTO users VALUES (?, ?, ?, ?, ?, 0, 0, ?, 0, NOW())', [sid, name, departmentId, email, sha512(password), profileUrl]);
  const user = await findBySid(sid);
  return user;
};

const findBySid = async (sid) => {
  const [[row]] = await pool.query('SELECT * FROM users WHERE sid = ?', [sid]);
  const user = User.create(row);
  return user;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  const users = rows.map(User.create);
  return users;
};

const update = async (sid, data) => {
  await pool.query('UPDATE users SET ? WHERE sid = ?', [data, sid]);
};

module.exports = {
  create,
  findBySid,
  getAll,
  update,
};
