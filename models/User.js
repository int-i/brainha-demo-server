class User {
  static findBySid(sid) {
    const mockUser = new User(
      sid,
      '홍길동',
      'test@inti.club', 'd404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176b6db28512f2e000b9d04fba5133e8b1c6e8df59db3a8ab9d60be4b97cc9e81db',
      0,
      0,
      null,
      false,
      new Date(),
    );
    return mockUser;
  }

  constructor(sid, name, email, passwordHash, permission, reputation, profileUrl, hidden, createdAt) {
    this.sid = sid;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.permission = permission;
    this.reputation = reputation;
    this.profileUrl = profileUrl;
    this.hidden = hidden;
    this.createdAt = createdAt;
  }
}

module.exports = User;
