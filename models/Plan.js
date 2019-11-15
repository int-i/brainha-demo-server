class Plan {
    static create(row) {
      const plan = new Plan(row.id, row.name, row.cost, row.duration);
      return plan;
    }
  
    constructor(id, name, cost, duration) {
      this.id = id;
      this.name = name;
      this.cost = cost;
      this.duration = duration;
    }
  
    toJSON() {
      const { id, name, cost, duration } = this;
      return {
        id,
        name,
        cost,
        duration
      };
    }
  }
  
  module.exports = Plan;
  
