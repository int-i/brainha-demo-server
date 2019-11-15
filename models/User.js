class User {
  static create(row) {
    return new User(
      row.sid, row.name, row.department_id, row.email, row.password_hash,
      row.permission, row.reputation, row.profile_url, row.hidden, row.created_at,
    );
  }

  constructor(
    sid, name, departmentId, email, passwordHash,
    permission, reputation, profileUrl, hidden, createdAt,
  ) {
    this.sid = sid;
    this.name = name;
    this.departmentId = departmentId;
    this.email = email;
    this.passwordHash = passwordHash;
    this.permission = permission;
    this.reputation = reputation;
    this.profileUrl = profileUrl;
    this.hidden = hidden;
    this.createdAt = createdAt;
  }

  toJSON() {
    const {
      sid, name, departmentId, email, passwordHash,
      permission, reputation, profileUrl, hidden, createdAt,
    } = this;
    return {
      sid,
      name,
      departmentId,
      email,
      passwordHash,
      permission,
      reputation,
      profileUrl,
      hidden,
      createdAt,
    };
  }
}

module.exports = User;
