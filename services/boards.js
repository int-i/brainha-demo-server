const boardRepository = require('../repositories/boards');
const postRepository = require('../repositories/posts');

const createBoard = async (name, data) => {
  const board = await boardRepository.create(name, data);
  return board;
};

const disableBoard = async (id) => {
  await boardRepository.update(id, { hidden: 1 });
};

const enableBoard = async (id) => {
  await boardRepository.update(id, { hidden: 0 });
};

const getBoard = async (id) => {
  const board = await boardRepository.findById(id);
  return board;
};

const getBoards = async () => {
  const boards = await boardRepository.getAll();
  return boards;
};

const getPosts = async (id) => {
  const posts = await postRepository.findByBoardId(id);
  return posts;
};

const updateBoard = async (id, data) => {
  await boardRepository.update(id, data);
};

const writePost = async (id, data) => {
  await postRepository.create(id, data);
};

module.exports = {
  createBoard,
  disableBoard,
  enableBoard,
  getBoard,
  getBoards,
  getPosts,
  updateBoard,
  writePost,
};
