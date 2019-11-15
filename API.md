# API

삭제와 탈퇴는 `DELETE`가 아닌 `UPDATE hidden=1`로 처리함

파일(이미지, 첨부파일 등)은 글 작성이전 File API를 이용해 서버로 업로드

## Summary

### Test

- [x] 핑퐁

### User

- [ ] 회원가입
- [ ] 모든 사용자 조회
- [ ] 사용자 조회
- [ ] 사용자 정보 강제 수정
- [ ] 사용자 정보 수정
- [ ] 회원강퇴
- [ ] 회원탈퇴
- [ ] 로그인(JWT 토큰 발급)

### Board

- [ ] 새 게시판 생성
- [ ] 게시판 정보 조회
- [ ] 게시판 수정
- [ ] 게시판 삭제
- [ ] **질문글 작성**
- [ ] 게시판 질문글 조회

### Question

- [ ] 모든 질문글 조회
- [ ] 질문글 조회
- [ ] 질문글 강제 수정
- [ ] 질문글 수정
- [ ] 질문글 강제 삭제
- [ ] 질문글 삭제
- [ ] **답변글 작성**
- [ ] 질문별 답변글 조회
- [ ] **댓글 작성**
- [ ] 질문글 좋아요
- [ ] 질문글 좋아요 확인

### Answer

- [ ] 모든 답변글 조회
- [ ] 답변글 조회
- [ ] 답변글 강제 수정
- [ ] 답변글 수정
- [ ] 답변글 강제 삭제
- [ ] 답변글 삭제
- [ ] **댓글 작성**
- [ ] 답변글 좋아요
- [ ] 답변글 좋아요 확인

### Comment

- [ ] 모든 댓글 조회
- [ ] 댓글 조회
- [ ] 댓글 강제 수정
- [ ] 댓글 수정
- [ ] 댓글 강제 삭제
- [ ] 댓글 삭제

### File

- [ ] 파일 업로드
- [ ] 파일 다운로드

## Test

### GET /ping

Output: pong

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
[{ sid, name, email, permission, reputation, profile_url, created_at }] || []
```

### GET /users/{sid}

사용자 조회

Output:

```text
{ sid, name, email, permission, reputation, profile_url, created_at } || {}
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

로그인(JWT 토큰 발급)

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
[{ id, board_id, author_id, title, content, tags, views, likes, created_at }] || []
```

## Question

### GET /questions

모든 질문글 조회

Output:

```text
[{ board_id, id, author_id, title, content, tags, views, likes, created_at }] || []
```

### GET /questions/{id}

질문글 조회

Output:

```text
{ board_id, id, author_id, title, content, tags, views, likes, created_at }
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

### GET /questions/{id}/answers

질문별 답변글 조회

Output:

```text
[{ id, question_id, author_id, content, likes, created_at }] || []
```

### POST /questions/{id}/comments

댓글 작성 **(Auth)**

Input:

```text
{ content }
```

### POST /questions/{id}/likes

질문글 좋아요 **(Auth)**

### GET /questions/{id}/likes

질문글 좋아요 클릭 확인 **(Auth)**

## Answer

### GET /answers

모든 답변글 조회

Output:

```text
[{ question_id, id, author_id, content, likes, created_at }] || []
```

### GET /answers/{id}

답변글 조회

Output:

```text
{ question_id, id, author_id, content, likes, created_at }
```

### PATCH /answers/{id}

답변글 강제 수정 **(Auth: Manager)**

Input:

```text
{ content }
```

### PATCH /answers/{id}

답변글 수정 **(Auth)**

Input:

```text
{ content }
```

### DELETE /answers/{id}

답변글 강제 삭제 **(Auth: Manager)**

### DELETE /answers/{id}

답변글 삭제 **(Auth)**

### POST /answers/{id}/comments

댓글 작성 **(Auth)**

Input:

```text
{ content }
```

### POST /answers/{id}/likes

답변글 좋아요 **(Auth)**

### GET /answers/{id}/likes

답변글 좋아요 클릭 확인 **(Auth)**

## Comment

### GET /comments

모든 댓글 조회

Output:

```text
[{ question_id?, answer_id?, id, author_id, content, created_at }] || []
```

### GET /comments/{id}

댓글 조회

Output:

```text
{ question_id?, answer_id?, id, author_id, content, created_at }
```

### PATCH /comments/{id}

댓글 강제 수정 **(Auth: Manager)**

Input:

```text
{ content }
```

### PATCH /comments/{id}

댓글 수정 **(Auth)**

Input:

```text
{ content }
```

### DELETE /comments/{id}

댓글 강제 삭제 **(Auth: Manager)**

### DELETE /comments/{id}

댓글 삭제 **(Auth)**

## File

### POST /file

파일 업로드 **(Auth)**

Input: File

Output:

```text
{ file_name }
```

### GET /file/{hash}

파일 다운로드 **(Auth)**

Output: File
