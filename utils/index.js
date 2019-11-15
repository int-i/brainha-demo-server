const crypto = require('crypto');

const filterEmpty = (data) => data.filter(
  (value) => value !== -1 && value !== null && value !== undefined,
);

const isEquals = (decodedToken, sid) => decodedToken && decodedToken.sid === sid;
const isManager = (decodedToken) => decodedToken && decodedToken.permission >= 1;

const sha1 = (data) => crypto.createHash('sha1').update(data).digest('hex');
const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

module.exports = {
  filterEmpty,
  isEquals,
  isManager,
  sha1,
  sha512,
};
