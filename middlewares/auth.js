const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const { JWT_ISSUER, JWT_SECRET } = process.env;

const SCHEMA_REGEX = /^Bearer ([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)$/;

const verifyToken = (req, res, next) => {
  const schema = req.header('Authorization');
  if (SCHEMA_REGEX.test(schema)) {
    const bearer = SCHEMA_REGEX.exec(schema);
    if (bearer && bearer[1]) {
      const token = bearer[1];
      const decodedToken = jwt.verify(token, JWT_SECRET, { issuer: JWT_ISSUER });
      req.verified = true;
      req.token = token;
      req.decodedToken = decodedToken;
      console.log('decodedToken', decodedToken);
    }
  }
  req.verified = Boolean(req.verified);
  next();
};

module.exports = verifyToken;
