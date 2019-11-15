class Post {
  static create(row) {
    const post = new Post(row.id, row.sid, row.title,
      row.content, row.hidden, row.views, row.likes,
      row.created_at, row.board_id);
    return post;
  }

  constructor(id, sid, title, content, hidden, views, likes, createdAt, boardId) {
    this.id = id;
    this.sid = sid;
    this.title = title;
    this.content = content;
    this.hidden = hidden;
    this.views = views;
    this.likes = likes;
    this.createdAt = createdAt;
    this.boardId = boardId;
  }

  toJSON() {
    const {
      id, sid, title, content, views, likes, createdAt, boardId,
    } = this;
    return {
      id,
      sid,
      title,
      content,
      views,
      likes,
      createdAt,
      boardId,
    };
  }
}

module.exports = Post;
