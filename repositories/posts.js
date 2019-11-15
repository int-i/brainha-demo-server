const Post = require('../models/Post');
const pool = require('../database');

const create = async (sid, boardId, title, content, { tags = [] }) => {
  const [rows] = await pool.query('INSERT INTO posts (sid, board_id, title, content, hidden, views, likes, created_at) VALUES (?, ?, ?, ?, 0, 0, 0, NOW())', [sid, boardId, title, content]);
  const [[row]] = await pool.query('SELECT * FROM posts WHERE id = ?', [rows.insertId]);
  const post = Post.create(row);
  return post;
};

const findById = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
  const post = Post.create(row);
  return post;
};

const findByBoardId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM posts WHERE board_id = ?', [id]);
  const posts = rows.map(Post.create);
  return posts;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM posts');
  const posts = rows.map(Post.create);
  return posts;
};

const update = async (id, data) => {
  await pool.query(`UPDATE posts SET ${Object.entries(data).map((key, value) => `${key} = ${value}`).join(' ')} WHERE id = ?`, [id]);
};

module.exports = {
  create,
  findById,
  findByBoardId,
  getAll,
  update,
};
