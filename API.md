# API

삭제와 탈퇴는 `DELETE`가 아닌 `UPDATE hidden=1`로 처리함

## Summary

### User

- [ ] 회원가입
- [ ] 모든 사용자 조회
- [ ] 사용자 조회
- [ ] 사용자 정보 강제 수정
- [ ] 사용자 정보 수정
- [ ] 회원강퇴
- [ ] 회원탈퇴
- [ ] 로그인 (JWT 토큰 발급)

### Board

- [ ] 새 게시판 생성
- [ ] 게시판 정보 조회
- [ ] 게시판 수정
- [ ] 게시판 삭제
- [ ] 질문글 작성
- [ ] 게시판 질문글 조회

### Question

- [ ] 모든 질문글 조회
- [ ] 질문글 조회
- [ ] 질문글 강제 수정
- [ ] 질문글 수정
- [ ] 질문글 강제 삭제
- [ ] 질문글 삭제
- [ ] 답변글 작성
- [ ] 질문 답변글 조회

### Answer

- [ ] 모든 답변글 조회
- [ ] 답변글 조회
- [ ] 답변글 강제 수정
- [ ] 답변글 수정
- [ ] 답변글 강제 삭제
- [ ] 답변글 삭제

## User

### POST /users

회원가입

Input:

```text
{ sid, name, email, password }
```

### GET /users

모든 사용자 조회 **(Auth: Manager)**

Output:

```text
[{ sid, name, email, permission, profile_url, created_at }] || []
```

### GET /users/{sid}

사용자 조회

Output:

```text
{ sid, name, email, permission, profile_url, created_at } || {}
```

### PATCH /users/{sid}

사용자 정보 강제 수정 **(Auth: Manager)**

Input:

```text
{ sid, name, email, password }
```

### PATCH /users/{sid}

사용자 정보 수정 **(Auth)**

Input:

```text
{ sid, name, email, password }
```

### DELETE /users/{sid}

회원강퇴 **(Auth: Manager)**

### DELETE /users/{sid}

회원탈퇴 **(Auth)**

### POST /users/auth

로그인 (JWT 토큰 발급)

Input:

```text
{ sid, password }
```

Output:

```text
{ jwt }
```

## Board

### POST /boards

새 게시판 생성 **(Auth: Manager)**

Input:

```text
{ name, description }
```

### GET /boards

모든 게시판 정보 조회

Output:

```text
[{ id, name, description, created_at ] || []
```

### GET /boards/{id}

게시판 정보 조회

Output:

```text
{ id, name, description, created_at } || {}
```

### PATCH /boards/{id}

게시판 수정 **(Auth: Manager)**

Input:

```text
{ name, description }
```

### DELETE /boards/{id}

게시판 삭제 **(Auth: Manager)**

### POST /boards/{id}/questions

질문글 작성 **(Auth)**

Input:

```text
{ title, content, tags }
```

### GET /boards/{id}/questions

게시판 질문글 조회

Output:

```text
[{ id, board_id, author_id, title, tags, view, likes, created_at }] || []
```

## Question

### GET /questions

모든 질문글 조회

Output:

```text
[{ board_id, id, author_id, title, tags, view, likes, created_at }] || []
```

### GET /questions/{id}

질문글 조회

Output:

```text
{ board_id, id, author_id, title, content, tags, view, likes, created_at }
```

### PATCH /questions/{id}

질문글 강제 수정 **(Auth: Manager)**

Input:

```text
{ board_id, title, content, tags }
```

### PATCH /questions/{id}

질문글 수정 **(Auth)**

Input:

```text
{ board_id, title, content, tags }
```

### DELETE /questions/{id}

질문글 강제 삭제 **(Auth: Manager)**

### DELETE /questions/{id}

질문글 삭제 **(Auth)**

### POST /questions/{id}/answers

답변글 작성 **(Auth)**

Input:

```text
{ content }
```

### GET /boards/{id}/answers

답변글 목록 조회

Output:

```text
[{ id, question_id, author_id, content, likes, created_at }] || []
```

## Answer

### GET /answers

모든 답변글 조회

Output:

```text
[{ question_id, id, author_id, tags, likes, created_at }] || []
```

### GET /answers/{id}

답변글 조회

Output:

```text
{ question_id, id, author_id, content, tags, likes, created_at }
```

### PATCH /answers/{id}

답변글 강제 수정 **(Auth: Manager)**

Input:

```text
{ question_id, content, tags }
```

### PATCH /answers/{id}

답변글 수정 **(Auth)**

Input:

```text
{ question_id, content, tags }
```

### DELETE /answers/{id}

답변글 강제 삭제 **(Auth: Manager)**

### DELETE /answers/{id}

답변글 삭제 **(Auth)**
