const crypto = require('crypto');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

dotenv.config();

const { BRAINHA_JWT_ISSUER, BRAINHA_JWT_SECRET } = process.env;

const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

const login = (sid, password) => {
  const user = User.findBySid(sid);
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
    const token = jwt.sign(payload, BRAINHA_JWT_SECRET, { issuer: BRAINHA_JWT_ISSUER });
    return token;
  }
  throw Error('No User');
};

module.exports = {
  login,
};
