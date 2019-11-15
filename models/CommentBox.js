class CommentBox {
  static create(row) {
    const commentBox = new CommentBox(row.id, row.sid, row.content,
      row.hidden, row.likes, row.created_at, row.post_id);
    return commentBox;
  }

  constructor(id, sid, content, hidden, likes, createdAt, postId) {
    this.id = id;
    this.sid = sid;
    this.content = content;
    this.hidden = hidden;
    this.likes = likes;
    this.createAt = createdAt;
    this.postId = postId;
  }

  toJSON() {
    const {
      id, sid, content, likes, createdAt, postId,
    } = this;
    return {
      id,
      sid,
      content,
      likes,
      createdAt,
      postId,
    };
  }
}

module.exports = CommentBox;
