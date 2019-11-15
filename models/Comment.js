class Comment {
  static create(row) {
    const comment = new Comment(row.id, row.sid, row.content,
      row.hidden, row.created_at, row.post_id, row.comment_box_id);
    return comment;
  }

  constructor(id, sid, content, hidden, createdAt, postId, commentBoxId) {
    this.id = id;
    this.sid = sid;
    this.content = content;
    this.hidden = hidden;
    this.createdAt = createdAt;
    this.postId = postId;
    this.commentBoxId = commentBoxId;
  }

  toJSON() {
    const {
      id, sid, content, createdAt, postId, commentBoxId,
    } = this;
    return {
      id,
      sid,
      content,
      createdAt,
      postId,
      commentBoxId,
    };
  }
}

module.exports = Comment;
