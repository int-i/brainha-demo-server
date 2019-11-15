class Comment_box {
    static create(row) {
      const comment_box = new Comment_box(row.id, row.sid, row.content, row.hiddenm, row.likes, row.created_at, row.post_id);
      return comment_box;
    }
  
    constructor(id, sid, content, hidden, likes, created_at, post_id) {
      this.id = id;
      this.sid = sid;
      this.content = content;
      this.hidden = hidden;
      this.likes = likes;
      this.create_at = create_at;
      this.post_id = post_id;
    }
  
    toJSON() {
      const { id, sid, content, hidden, likes, create_at, post_id } = this;
      return {
        id,
        sid,
        content,
        hidden,
        likes,
        create_at,
        post_id
      };
    }
  }
  
  module.exports = Comment_box;
  
