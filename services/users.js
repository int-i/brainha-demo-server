const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const repository = require('../repositories/users');
const { filterEmpty, sha512 } = require('../utils');

dotenv.config();

const { JWT_ISSUER, JWT_SECRET } = process.env;

const createUser = async (sid, password, props) => {
  const user = await repository.create(sid, password, props);
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
  await repository.update(sid, { hidden: 1 });
};

const enableUser = async (sid) => {
  await repository.update(sid, { hidden: 0 });
};

const getUser = async (sid) => {
  const user = await repository.findBySid(sid);
  return user;
};

const getUsers = async () => {
  const users = await repository.getAll();
  return users;
};

const login = async (sid, password) => {
  const user = await repository.findBySid(sid);
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

const updateUser = async (sid, data) => {
  await repository.update(sid, filterEmpty(data));
};

module.exports = {
  createUser,
  disableUser,
  enableUser,
  getUser,
  getUsers,
  login,
  updateUser,
};
