const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sha512 } = require('../utils');

dotenv.config();

const { JWT_ISSUER, JWT_SECRET } = process.env;


const login = async (sid, password) => {
  const user = await User.findBySid(sid);
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

module.exports = {
  login,
};
