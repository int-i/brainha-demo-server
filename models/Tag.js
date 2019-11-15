class Tag {
    static create(row) {
      const tag = new Tag(row.tag_id, row.name);
      return tag;
    }
  
    constructor(tag_id, name) {
      this.tag_id = tag_id;
      this.name = name;
    }
  
    toJSON() {
      const { tag_id, name } = this;
      return {
        tag_id,
        name,
      };
    }
  }
  
  module.exports = Tag;
  
