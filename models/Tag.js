class Tag {
  static create(row) {
    const tag = new Tag(row.tag_id, row.name);
    return tag;
  }

  constructor(tagId, name) {
    this.tagId = tagId;
    this.name = name;
  }

  toJSON() {
    const { tagId, name } = this;
    return {
      tagId,
      name,
    };
  }
}

module.exports = Tag;
