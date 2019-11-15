const commentRepository = require('../repositories/comments');
const commentBoxRepository = require('../repositories/commentBoxes');

const checkLikes = async () => false; // todo

const getComments = async (commentBoxId) => {
  const comments = await commentRepository.findByCommentBoxId(commentBoxId);
  return comments;
};

const getCommentBox = async (commentBoxId) => {
  const commentBox = await commentBoxRepository.findById(commentBoxId);
  return commentBox;
};

const getCommentBoxes = async () => {
  const commentBoxes = await commentBoxRepository.getAll();
  return commentBoxes;
};

const hideCommentBox = async (commentBoxId) => {
  await commentBoxRepository.update(commentBoxId, { hidden: 1 });
};

const like = async (commentBoxId, sid) => {
  await commentBoxRepository.increase(commentBoxId, ['likes']);
  // todo: post log
};

const showCommentBox = async (commentBoxId) => {
  await commentBoxRepository.update(commentBoxId, { hidden: 0 });
};

const updateCommentBox = async (commentBoxId, data) => {
  await commentBoxRepository.update(commentBoxId, data);
};

const writeComment = async (commentBoxId, sid, content) => {
  await commentRepository.createFromCommentBox(commentBoxId, sid, content);
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
