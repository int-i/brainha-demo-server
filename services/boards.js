const boardRepository = require('../repositories/boards');
const postRepository = require('../repositories/posts');

const createBoard = async (name, data) => {
  const board = await boardRepository.create(name, data);
  return board;
};

const disableBoard = async (boardId) => {
  await boardRepository.update(boardId, { hidden: 1 });
};

const enableBoard = async (boardId) => {
  await boardRepository.update(boardId, { hidden: 0 });
};

const getBoard = async (boardId) => {
  const board = await boardRepository.findById(boardId);
  return board;
};

const getBoards = async () => {
  const boards = await boardRepository.getAll();
  return boards;
};

const getPosts = async (boardId) => {
  const posts = await postRepository.findByBoardId(boardId);
  return posts;
};

const updateBoard = async (boardId, data) => {
  await boardRepository.update(boardId, data);
};

const writePost = async (boardId, sid, { title, content, tags }) => {
  await postRepository.create(boardId, sid, title, content, { tags });
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
