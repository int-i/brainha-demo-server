const service = require('../services/commentBoxes');

const checkLikes = async (req, res) => {
  const { id } = req.params;
  const isLiked = await service.checkLikes(id);
  res.send({ isLiked });
};

const getComments = async (req, res) => {
  const { id } = req.params;
  const comments = await service.getComments(id);
  res.send(comments.map((comment) => comment.toJSON()));
};

const getCommentBox = async (req, res) => {
  const { id } = req.params;
  const commentBox = await service.getCommentBox(id);
  res.send(commentBox.toJSON());
};

const getCommentBoxes = async (req, res) => {
  const commentBoxes = await service.getCommentBoxes();
  res.send(commentBoxes.map((commentBox) => commentBox.toJSON()));
};

const hideCommentBox = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.hideCommentBox(id);
    res.end();
  } else {
    res.status(401).end();
  }
};

const like = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.like(id, decodedToken.sid);
    res.end();
  } else {
    res.status(401).end();
  }
};

const showCommentBox = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.showCommentBox(id);
    res.end();
  } else {
    res.status(401).end();
  }
};

const updateCommentBox = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const data = body;
  if (decodedToken) {
    await service.updateCommentBox(id, data);
    res.end();
  } else {
    res.status(401).end();
  }
};

const writeComment = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const { content } = body;
  if (decodedToken) {
    await service.writeComment(id, decodedToken.sid, content);
    res.end();
  } else {
    res.status(401).end();
  }
};

module.exports = {
  checkLikes,
  getComments,
  getCommentBox,
  getCommentBoxes,
  hideCommentBox,
  like,
  showCommentBox,
  updateCommentBox,
  writeComment,
};
