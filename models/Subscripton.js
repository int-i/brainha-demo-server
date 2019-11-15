class Subscription {
  static create(row) {
    const subscription = new subscription(row.id, row.plan_id, row.user_id, row.valid, row.started_at, row.ended_at, row.canceled_at);
    return subscription;
  }

  constructor(id, plan_id, user_id, valid, started_at, ended_at, canceled_at) {
    this.id = id;
    this.plan_id = plan_id;
    this.user_id = user_id;
    this.valid = valid;
    this.started_at = started_at;
    this.ended_at = ended_at;
    this.canceled_at = canceled_at;
  }

  toJSON() {
    const {
      id, plan_id, user_id, valid, started_at, ended_at, canceled_at,
    } = this;
    return {
      id,
      plan_id,
      user_id,
      valid,
      started_at,
      ended_at,
      canceled_at,
    };
  }
}

module.exports = Subscription;
