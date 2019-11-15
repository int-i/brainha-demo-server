const commentRepository = require('../repositories/comments');
const commentBoxRepository = require('../repositories/commentBoxes');
const postRepository = require('../repositories/posts');

const checkLikes = async () => false; // todo

const getComments = async (postId) => {
  const comments = await commentRepository.findByPostId(postId);
  return comments;
};

const getCommentBoxes = async (postId) => {
  const commentBoxes = await commentBoxRepository.findByPostId(postId);
  return commentBoxes;
};

const getPost = async (postId) => {
  const post = await postRepository.findById(postId);
  return post;
};

const getPosts = async () => {
  const posts = await postRepository.getAll();
  return posts;
};

const hidePost = async (postId) => {
  await postRepository.update(postId, { hidden: 1 });
};

const like = async (postId, sid) => {
  await postRepository.increase(postId, ['likes']);
  // todo: post log
};

const showPost = async (postId) => {
  await postRepository.update(postId, { hidden: 0 });
};

const updatePost = async (postId, data) => {
  await postRepository.update(postId, data);
};

const writeComment = async (postId, sid, content) => {
  await commentRepository.createFromPost(postId, sid, content);
};

const writeCommentBox = async (postId, sid, content) => {
  await commentBoxRepository.create(postId, sid, content);
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
