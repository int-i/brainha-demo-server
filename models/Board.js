class Board {
    static create(row) {
      const board = new Board(row.id, row.name, row.description, row.hidden, row.created_at, row.board_type, row.category_id);
      return board;
    }
  
    constructor(id, name, description, hidden, created_at, board_type, category_id) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.hidden = hidden;
      this.create = created_at;
      this.board_type = board_type;
      this.category_id = category_id;
    }
  
    toJSON() {
      const { id, name, description, hidden, created_at, board_type, category_id } = this;
      return {
        id,
        name,
        description,
        hidden,
        created_at,
        board_type,
        category_id
      };
    }
  }
  
  module.exports = Board;
  
