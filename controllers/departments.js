const service = require('../services/departments');

const getDepartment = async (req, res) => {
  const { id } = req.params;
  const department = await service.getDepartment(id);
  res.send(department);
};

const getDepartments = async (req, res) => {
  const departments = await service.getDepartments();
  res.send(departments);
};

module.exports = {
  getDepartment,
  getDepartments,
};
