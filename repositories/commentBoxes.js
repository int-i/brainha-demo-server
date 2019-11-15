const CommentBox = require('../models/CommentBox');
const pool = require('../database');

const create = async (postId, sid, content) => {
  const [rows] = await pool.query('INSERT INTO comment_boxes (sid, post_id, content, hidden, likes, created_at) VALUES (?, ?, ?, 0, 0, NOW())', [sid, postId, content]);
  const [[row]] = await pool.query('SELECT * FROM comment_boxes WHERE id = ?', [rows.insertId]);
  const commentBox = CommentBox.create(row);
  return commentBox;
};

const findById = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM comment_boxes WHERE id = ?', [id]);
  const commentBox = CommentBox.create(row);
  return commentBox;
};

const findByPostId = async (postId) => {
  const [rows] = await pool.query('SELECT * FROM comment_boxes WHERE post_id = ?', [postId]);
  const commentBoxes = rows.map(CommentBox.create);
  return commentBoxes;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM comment_boxes');
  const commentBoxes = rows.map(CommentBox.create);
  return commentBoxes;
};

const increase = async (id, data) => {
  await pool.query(`UPDATE comment_boxes SET ${data.map((value) => `${value} = ${value} + 1`).join(', ')} WHERE id = ?`, [id]);
};

const update = async (id, data) => {
  await pool.query('UPDATE comment_boxes SET ? WHERE id = ?', [data, id]);
};

module.exports = {
  create,
  findById,
  findByPostId,
  getAll,
  increase,
  update,
};
