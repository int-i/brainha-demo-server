const service = require('../services/posts');

const checkLikes = async (req, res) => {
  const { id } = req.params;
  const isLiked = await service.checkLikes(id);
  res.send({ isLiked });
};

const getComments = async (req, res) => {
  const { id } = req.params;
  const comments = await service.getComments(id);
  res.send(comments);
};

const getCommentBoxes = async (req, res) => {
  const { id } = req.params;
  const commentBoxes = await service.getCommentBoxes(id);
  res.send(commentBoxes);
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await service.getPost(id);
  res.send(post.toJSON());
};

const getPosts = async (req, res) => {
  const posts = await service.getPosts();
  res.send(posts.map((post) => post.toJSON()));
};

const hidePost = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.hidePost(id);
    res.end();
  }
  res.status(401).end();
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

const showPost = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (decodedToken) {
    await service.showPost(id);
    res.end();
  }
  res.status(401).end();
};

const updatePost = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const { data } = body;
  if (decodedToken) {
    await service.updatePost(id, data);
    res.end();
  }
  res.status(401).end();
};

const writeComment = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const { content } = body;
  if (decodedToken) {
    await service.writeComment(id, decodedToken.sid, content);
    res.end();
  }
  res.status(401).end();
};

const writeCommentBox = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const { content } = body;
  if (decodedToken) {
    await service.writeCommentBox(id, decodedToken.sid, content);
    res.end();
  }
  res.status(401).end();
};

module.exports = {
  checkLikes,
  getComments,
  getCommentBoxes,
  getPost,
  getPosts,
  hidePost,
  like,
  showPost,
  updatePost,
  writeComment,
  writeCommentBox,
};
