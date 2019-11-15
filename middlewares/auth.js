const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const { BRAINHA_JWT_ISSUER, BRAINHA_JWT_SECRET } = process.env;

const SCHEMA_REGEX = /^Bearer ([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)$/;

const verifyToken = (req, res, next) => {
  const schema = req.header('Authorization');
  if (SCHEMA_REGEX.test(schema)) {
    const bearer = SCHEMA_REGEX.exec(schema);
    if (bearer && bearer[1]) {
      const token = bearer[1];
      const decodedToken = jwt.verify(token, BRAINHA_JWT_SECRET, { issuer: BRAINHA_JWT_ISSUER });
      req.token = token;
      req.decodedToken = decodedToken;
      console.log('decodedToken', decodedToken);
    }
  }
  next();
};

module.exports = verifyToken;
