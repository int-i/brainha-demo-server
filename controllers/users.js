const service = require('../services/users');

const login = (req, res) => {
  const { sid, password } = req.body;
  const token = service.login(sid, password);
  res.send({
    token,
  });
};

module.exports = {
  login,
};
