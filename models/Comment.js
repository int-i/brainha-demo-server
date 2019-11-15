class Comment {
    static create(row) {
      const comment = new Comment(row.id, row.sid, row.content, row.hidden, row.created_at, row.post_id, row.comment_box_id);
      return comment;
    }
  
    constructor(id, sid, content, hidden, created_at, post_id, comment_box_id) {
      this.id = id;
      this.sid = sid;
      this.content = content;
      this.hidden = hidden;
      this.created_at = created_at;
      this.post_id = post_id;
      this.comment_box_id = comment_box_id;
    }
  
    toJSON() {
      const { id, sid, content, hidden, created_at, post_id, comment_box_id } = this;
      return {
        id,
        sid,
        content,
        hidden,
        created_at,
        post_id,
        comment_box_id
      };
    }
  }
  
  module.exports = Comment;
  
