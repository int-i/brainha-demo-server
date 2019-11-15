class Department {
  static create(row) {
    const department = new Department(row.id, row.name);
    return department;
  }

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toJSON() {
    const { id, name } = this;
    return {
      id,
      name,
    };
  }
}

module.exports = Department;
