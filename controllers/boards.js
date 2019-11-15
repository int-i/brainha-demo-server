const service = require('../services/boards');
const { isManager } = require('../utils');

const createBoard = async (req, res) => {
  const { decodedToken, body } = req;
  const {
    name, description, type, categoryId,
  } = body;
  if (isManager(decodedToken)) {
    await service.createBoard(name, { description, type, categoryId });
    res.end();
  } else {
    res.status(401).end();
  }
};

const disableBoard = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (isManager(decodedToken)) {
    await service.disableBoard(id);
    res.end();
  } else {
    res.status(401).end();
  }
};

const enableBoard = async (req, res) => {
  const { decodedToken, params } = req;
  const { id } = params;
  if (isManager(decodedToken)) {
    await service.enableBoard(id);
    res.end();
  } else {
    res.status(401).end();
  }
};

const getBoard = async (req, res) => {
  const { id } = req.params;
  const board = service.getBoard(id);
  res.send(board.toJSON());
};

const getBoards = async (req, res) => {
  const boards = service.getBoards();
  res.send(boards.map((board) => board.toJSON()));
};

const getPosts = async (req, res) => {
  const { id } = req.params;
  const posts = service.getPosts(id);
  res.send(posts.map((post) => post.toJSON()));
};

const updateBoard = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  const { data } = body;
  if (isManager(decodedToken)) {
    await service.updateBoard(id, data);
    res.end();
  } else {
    res.status(401).end();
  }
};

const writePost = async (req, res) => {
  const { decodedToken, params, body } = req;
  const { id } = params;
  if (decodedToken) {
    await service.writePost(id, data);
    res.end();
  } else {
    res.status(401).end();
  }
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
