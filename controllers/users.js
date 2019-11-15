const service = require('../services/users');
const { isManager, sha512 } = require('../utils');

const createUser = async (req, res) => {
  const {
    sid, name, departmentId, email, password, profileUrl,
  } = req.body;
  const token = service.createUser(sid, password, {
    name,
    departmentId,
    email,
    profileUrl,
  });
  res.send(token);
};

const disableUser = async (req, res) => {
  const { decodedToken } = req;
  if (decodedToken) {
    await service.disableUser(decodedToken.sid);
    res.end();
  } else {
    res.status(401).end();
  }
};

const enableUser = async (req, res) => {
  const { decodedToken } = req;
  if (decodedToken) {
    await service.enableUser(decodedToken.sid);
    res.end();
  } else {
    res.status(401).end();
  }
};

const getSubscription = async (req, res) => {
  const { decodedToken } = req;
  if (decodedToken) {
    const subscription = await service.getSubscription(decodedToken.sid);
    res.send(subscription.toJSON());
  } else {
    res.status(401).end();
  }
};

const getUser = async (req, res) => {
  const { sid } = req.params;
  const user = await service.getUser(sid);
  res.send(user.toJSON());
};

const getUsers = async (req, res) => {
  const { decodedToken } = req;
  if (isManager(decodedToken)) {
    const users = await service.getUsers();
    res.send(users.map((user) => user.toJSON()));
  } else {
    res.status(401).end();
  }
};

const login = async (req, res) => {
  const { sid, password } = req.body;
  const token = await service.login(sid, password);
  console.log('token', token);
  res.send({ token });
};

const subscript = async (req, res) => {
  const { decodedToken, body } = req;
  const { planId } = body;
  if (decodedToken) {
    await service.subscript(decodedToken.sid, planId);
    res.end();
  } else {
    res.status(401).end();
  }
};

const unsubscript = async (req, res) => {
  const { decodedToken } = req;
  if (decodedToken) {
    await service.unsubscript(decodedToken.sid);
    res.end();
  } else {
    res.status(401).end();
  }
};

const updateUser = async (req, res) => {
  const { decodedToken, body } = req;
  const data = body;
  data.password = data.password && sha512(data.password);
  if (decodedToken) {
    if (!isManager(decodedToken)) {
      data.permission = data.permission && -1;
    }
    await service.updateUser(decodedToken.sid, data);
    res.end();
  } else {
    res.status(401).end();
  }
};

module.exports = {
  createUser,
  disableUser,
  enableUser,
  getSubscription,
  getUser,
  getUsers,
  login,
  subscript,
  unsubscript,
  updateUser,
};
