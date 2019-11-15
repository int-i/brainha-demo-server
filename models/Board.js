class Board {
  static create(row) {
    const board = new Board(row.id, row.name, row.description,
      row.hidden, row.created_at, row.board_type, row.category_id);
    return board;
  }

  constructor(id, name, description, hidden, createdAt, boardType, categoryId) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.hidden = hidden;
    this.createAt = createdAt;
    this.boardType = boardType;
    this.categoryId = categoryId;
  }

  toJSON() {
    const {
      id, name, description, createdAt, boardType, categoryId,
    } = this;
    return {
      id,
      name,
      description,
      createdAt,
      boardType,
      categoryId,
    };
  }
}

module.exports = Board;
