const Comment = require('../models/Comment');
const pool = require('../database');

const createFromCommentBox = async (commentBoxId, sid, content) => {
  const [rows] = await pool.query('INSERT INTO comments (sid, comment_box_id, content, hidden, created_at) VALUES (?, ?, ?, 0, NOW())', [sid, commentBoxId, content]);
  const [[row]] = await pool.query('SELECT * FROM comments WHERE id = ?', [rows.insertId]);
  const comment = Comment.create(row);
  return comment;
};

const createFromPost = async (postId, sid, content) => {
  const [rows] = await pool.query('INSERT INTO comments (sid, post_id, content, hidden, created_at) VALUES (?, ?, ?, 0, NOW())', [sid, postId, content]);
  const [[row]] = await pool.query('SELECT * FROM comments WHERE id = ?', [rows.insertId]);
  const comment = Comment.create(row);
  return comment;
};

const findByCommentBoxId = async (commentBoxId) => {
  const [rows] = await pool.query('SELECT * FROM comments WHERE comment_box_id = ?', [commentBoxId]);
  const comments = rows.map(Comment.create);
  return comments;
};

const findById = async (id) => {
  const [[row]] = await pool.query('SELECT * FROM comments WHERE id = ?', [id]);
  const comment = Comment.create(row);
  return comment;
};

const findByPostId = async (postId) => {
  const [rows] = await pool.query('SELECT * FROM comments WHERE post_id = ?', [postId]);
  const comments = rows.map(Comment.create);
  return comments;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM comments');
  const comments = rows.map(Comment.create);
  return comments;
};

const update = async (id, data) => {
  await pool.query(`UPDATE comments SET ${Object.entries(data).map((key, value) => `${key} = ${value}`).join(', ')} WHERE id = ?`, [id]);
};

module.exports = {
  createFromCommentBox,
  createFromPost,
  findByCommentBoxId,
  findById,
  findByPostId,
  getAll,
  update,
};
