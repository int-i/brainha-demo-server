const Subscription = require('../models/Subscription');
const pool = require('../database');

const create = async (sid, planId) => {
  await pool.query('INSERT INTO subscriptions (plan_id, sid, valid, started_at, ended_at) VALUES (?, ?, 1, NOW(), DATE_ADD(NOW(), INTERVAL (SELECT duration FROM plans WHERE id = ?) DAY))', [planId, sid, planId]);
  const user = await findBySid(sid);
  return user;
};

const findBySid = async (sid) => {
  const [[row]] = await pool.query('SELECT * FROM subscriptions WHERE sid = ?', [sid]);
  const subscription = Subscription.create(row);
  return subscription;
};

const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM subscriptions');
  const subscriptions = rows.map(Subscription.create);
  return subscriptions;
};

const update = async (sid, data) => {
  await pool.query('UPDATE subscriptions SET ? WHERE sid = ? AND valid = 1', [data, sid]);
};

module.exports = {
  create,
  findBySid,
  getAll,
  update,
};
