const service = require('../services/comments');

const getComment = async (req, res) => {
  const { id } = req.params;
  const comment = await service.getComment(id);
  res.send(comment.toJSON());
};

const getComments = async (req, res) => {
  const comments = await service.getComments();
  res.send(comments.map((comment) => comment.toJSON()));
};

const hideComment = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.hideComment(id);
    res.end();
  } else {
    res.status(401).end();
  }
};

const showComment = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.showComment(id);
    res.end();
  } else {
    res.status(401).end();
  }
};

const updateComment = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const data = body;
  if (decodedToken) {
    await service.updateComment(id, data);
    res.end();
  } else {
    res.status(401).end();
  }
};

module.exports = {
  getComment,
  getComments,
  hideComment,
  showComment,
  updateComment,
};
