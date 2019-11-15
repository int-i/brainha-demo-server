class Category {
  static create(row) {
    const category = new Category(row.category_id, row.name);
    return category;
  }

  constructor(CategoryId, name) {
    this.CategoryId = CategoryId;
    this.name = name;
  }

  toJSON() {
    const { CategoryId, name } = this;
    return {
      CategoryId,
      name,
    };
  }
}

module.exports = Category;
