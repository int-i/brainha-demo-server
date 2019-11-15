const service = require('../services/users');

const login = async (req, res) => {
  const { sid, password } = req.body;
  const token = await service.login(sid, password);
  res.send({
    token,
  });
};

module.exports = {
  login,
};
