class Subscription {
  static create(row) {
    const subscription = new Subscription(row.id, row.plan_id,
      row.user_id, row.valid, row.started_at, row.ended_at,
      row.canceled_at);
    return subscription;
  }

  constructor(id, planId, userId, valid, startedAt, endedAt, canceledAt) {
    this.id = id;
    this.planId = planId;
    this.userId = userId;
    this.valid = valid;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.canceledAt = canceledAt;
  }

  toJSON() {
    const {
      id, planId, userId, valid, startedAt, endedAt, canceledAt,
    } = this;
    return {
      id,
      planId,
      userId,
      valid,
      startedAt,
      endedAt,
      canceledAt,
    };
  }
}

module.exports = Subscription;
