class Category {
    static create(row) {
      const category = new Category(row.category_id, row.name);
      return category;
    }
  
    constructor(category_id, name) {
      this.category_id = category_id;
      this.name = name;
    }
  
    toJSON() {
      const { category_id, name } = this;
      return {
        category_id,
        name,
      };
    }
  }
  
  module.exports = Category;
  
