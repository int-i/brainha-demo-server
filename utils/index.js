const crypto = require('crypto');

const sha1 = (data) => crypto.createHash('sha1').update(data).digest('hex');
const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

module.exports = {
  sha1,
  sha512,
};
