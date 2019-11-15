const multer = require('multer');
const path = require('path');
const { sha1 } = require('../utils');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../static'));
  },
  filename(req, file, cb) {
    cb(null, sha1(`${file.filename}-${Date.now()}`));
  },
});
const upload = multer({ storage }).any();

const downloadFile = (req, res) => {
  res.end();
};

const uploadFile = (req, res, next) => {
  if (req.verified) {
    upload(req, res, next);
    res.end();
  } else {
    res.status(401).end();
  }
};

module.exports = {
  downloadFile,
  uploadFile,
};
