const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const subscriptionRepository = require('../repositories/subscriptions');
const userRepository = require('../repositories/users');
const { filterEmpty, sha512 } = require('../utils');

dotenv.config();

const { JWT_ISSUER, JWT_SECRET } = process.env;

const createUser = async (sid, password, data) => {
  const user = await userRepository.create(sid, password, data);
  const payload = {
    sid: user.sid,
    name: user.name,
    departmentId: user.departmentId,
    email: user.email,
    permission: user.permission,
    reputation: user.reputation,
    profileUrl: user.profileUrl,
    createdAt: user.createdAt,
  };
  const token = jwt.sign(payload, JWT_SECRET, { issuer: JWT_ISSUER });
  return token;
};

const disableUser = async (sid) => {
  await userRepository.update(sid, { hidden: 1 });
};

const enableUser = async (sid) => {
  await userRepository.update(sid, { hidden: 0 });
};

const getSubcription = async (sid) => {
  const subscription = await subscriptionRepository.findBySid(sid);
  return subscription;
};

const getUser = async (sid) => {
  const user = await userRepository.findBySid(sid);
  return user;
};

const getUsers = async () => {
  const users = await userRepository.getAll();
  return users;
};

const login = async (sid, password) => {
  const user = await userRepository.findBySid(sid);
  const passwordHash = sha512(password);
  if (passwordHash === user.passwordHash) {
    const payload = {
      sid: user.sid,
      name: user.name,
      email: user.email,
      permission: user.permission,
      reputation: user.reputation,
      profileUrl: user.profileUrl,
      createdAt: user.createdAt,
    };
    const token = jwt.sign(payload, JWT_SECRET, { issuer: JWT_ISSUER });
    return token;
  }
  throw Error('No User');
};

const subscript = async (sid, planId) => {
  await subscriptionRepository.create(sid, planId);
};

const unsubscript = async (sid) => {
  const now = new Date();
  await subscriptionRepository.update(sid, { valid: 0, canceled_at: now });
};

const updateUser = async (sid, data) => {
  await userRepository.update(sid, filterEmpty(data));
};

module.exports = {
  createUser,
  disableUser,
  enableUser,
  getSubcription,
  getUser,
  getUsers,
  login,
  subscript,
  unsubscript,
  updateUser,
};
