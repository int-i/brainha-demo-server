const repository = require('../repositories/departments');

const getDepartment = async (id) => {
  const department = await repository.findById(id);
  return department;
};

const getDepartments = async () => {
  const departments = await repository.getAll();
  return departments;
};

module.exports = {
  getDepartment,
  getDepartments,
};
