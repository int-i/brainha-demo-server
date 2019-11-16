const commentRepository = require('../repositories/comments');

const getComment = async (commentId) => {
  const comment = await commentRepository.findById(commentId);
  return comment;
};

const getComments = async () => {
  const comments = await commentRepository.getAll();
  return comments;
};

const hideComment = async (commentId) => {
  await commentRepository.update(commentId, { hidden: 1 });
};

const showComment = async (commentId) => {
  await commentRepository.update(commentId, { hidden: 0 });
};

const updateComment = async (commentId, data) => {
  await commentRepository.update(commentId, data);
};

module.exports = {
  getComment,
  getComments,
  hideComment,
  showComment,
  updateComment,
};
