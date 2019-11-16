# API

삭제와 탈퇴는 `DELETE`가 아닌 `UPDATE hidden=1`로 처리함

파일(이미지, 첨부파일 등)은 글 작성이전 File API를 이용해 서버로 업로드

## Summary

### Test

- [x] 핑퐁

### Info

- [x] 학과 정보
- [ ] 구독 상품 정보

### User

- [x] 회원가입
- [x] 모든 사용자 조회
- [x] 사용자 조회
- [ ] 사용자 정보 강제 수정
- [x] 사용자 정보 수정
- [ ] 회원강퇴
- [x] 회원탈퇴
- [x] 로그인(JWT 토큰 발급)
- [x] 구독
- [x] 구독 확인
- [x] 구독 해지

### Category

- [ ] 모든 카테고리 조회
- [ ] 카테고리 조회
- [ ] 즐겨찾기 추가

### Board

- [x] 새 게시판 생성
- [x] 모든 게시판 정보 조회
- [x] 게시판 정보 조회
- [x] 게시판 수정
- [x] 게시판 삭제
- [x] **글 작성**
- [x] 게시판 글 조회

### Post

- [x] 모든 글 조회
- [x] 글 조회
- [ ] 글 강제 수정
- [x] 글 수정
- [ ] 글 강제 삭제
- [x] 글 삭제
- [x] **답변글 작성**
- [x] 글별 답변글 조회
- [x] **댓글 작성**
- [x] 댓글 조회
- [x] 글 좋아요
- [x] 질문글 좋아요 클릭 확인

### Comment Box

- [x] 모든 답변글 조회
- [x] 답변글 조회
- [ ] 답변글 강제 수정
- [x] 답변글 수정
- [ ] 답변글 강제 삭제
- [x] 답변글 삭제
- [x] **댓글 작성**
- [x] 답변글 좋아요
- [x] 답변글 좋아요 클릭 확인

### Comment

- [x] 모든 댓글 조회
- [x] 댓글 조회
- [ ] 댓글 강제 수정
- [x] 댓글 수정
- [ ] 댓글 강제 삭제
- [x] 댓글 삭제

### File

- [x] 파일 업로드
- [x] 파일 다운로드

## Test

### GET /ping

Output: pong

## Info

### GET /departments

Output:

```text
[{ id, name }]
```
### GET /subscriptions

Output:

```text
[{ id, planId?, userId?, vaild, startedAt, endedAt, canceledAt? }]
```

### GET /plans

Output:

```text
[{ id, name, cost, duration }]
```

## User

### POST /users

회원가입

Input:

```text
{ sid, name?, departmentId?, email?, password, profileUrl?, createdAt }
```

Output:

```text
{ token }
```

### GET /users

모든 사용자 조회 **(Auth: Manager)**

Output:

```text
[{ sid, name, departmentId, email, permission, reputation, profileUrl, createdAt }] || []
```

### GET /users/{sid}

사용자 조회

Output:

```text
{ sid, name, email, permission, reputation, profileUrl, createdAt } || {}
```

### PATCH /users/{sid}

사용자 정보 강제 수정 **(Auth: Manager)**

Input:

```text
{ sid, name, email, password }
```

### PATCH /users

사용자 정보 수정 **(Auth)**

Input:

```text
{ name, email, password }
```

### DELETE /users/{sid}

회원강퇴 **(Auth: Manager)**

### DELETE /users

회원탈퇴 **(Auth)**

### POST /users/auth

로그인 (JWT 토큰 발급)

Input:

```text
{ sid, password }
```
Output:

```text
{ token }
```

### POST /users/subscription

구독 **(Auth)**

Input:

```text
{ planId }
```

### GET /users/subscription

구독 확인 **(Auth)**

Output:

```text
{planId, starteAt, endedAt}
```

### DELETE /users/subscription

구독 해지 **(Auth)**



## Board

### POST /boards

새 게시판 생성 **(Auth: Manager)**

Input:

```text
{ id, name, description?, hidden, createdAt, boardType?, categoryId  }
```

### GET /boards

모든 게시판 정보 조회

Output:

```text
[{ id, name, description, createdAt ] || []
```

### GET /boards/{id}

게시판 정보 조회

Output:

```text
{ id, name, description, createdAt } || {}
```

### PATCH /boards/{id}

게시판 수정 **(Auth: Manager)**

Input:

```text
{ name, description }
```

### DELETE /boards/{id}

게시판 삭제 **(Auth: Manager)**

### POST /boards/{id}/posts

질문글 작성 **(Auth)**

Input:

```text
{ title, content, tags }
```

### GET /boards/{id}/posts

게시판 질문글 조회

Output:

```text
[{ id, boardId, authorId, title, content, tags, views, likes, createdAt }] || []
```

## POST

### GET /posts

모든 질문글 조회

Output:

```text
[{ boardId, id, authorId, title, content, tags, views, likes, createdAt }] || []
```

### GET /posts/{id}

질문글 조회

Output:

```text
{ boardId, id, authorId, title, content, tags, views, likes, createdAt }
```

### PATCH /posts/{id}

질문글 강제 수정 **(Auth: Manager)**

Input:

```text
{ boardId, title, content, tags }
```

### PATCH /posts/{id}

질문글 수정 **(Auth)**

Input:

```text
{ boardId, title, content, tags }
```

### DELETE /posts/{id}

질문글 강제 삭제 **(Auth: Manager)**

### DELETE /posts/{id}

질문글 삭제 **(Auth)**

### POST /posts/{id}/commentboxes

답변글 작성 **(Auth)**

Input:

```text
{ content }
```

### GET /posts/{id}/commentboxes

질문별 답변글 조회

Output:

```text
[{ id, questionId, authorId, content, likes, createdAt }] || []
```

### POST /posts/{id}/comments

댓글 작성 **(Auth)**

Input:

```text
{ content }
```
### GET /posts/{id}/comments

댓글 조회

Output:

```text
{ content }
```

### POST /posts/{id}/likes

질문글 좋아요 **(Auth)**

### GET /posts/{id}/likes

질문글 좋아요 클릭 확인 **(Auth)**

## Comment Box

### GET /commentboxes

모든 답변글 조회

Output:

```text
[{ questionId, id, authorId, content, likes, createdAt }] || []
```

### GET /commentboxes/{id}

답변글 조회

Output:

```text
{ questionId, id, authorId, content, likes, createdAt }
```

### PATCH /commentboxes/{id}

답변글 강제 수정 **(Auth: Manager)**

Input:

```text
{ content }
```

### PATCH /commentboxes/{id}

답변글 수정 **(Auth)**

Input:

```text
{ content }
```

### DELETE /commentboxes/{id}

답변글 강제 삭제 **(Auth: Manager)**

### DELETE /commentboxes/{id}

답변글 삭제 **(Auth)**

### POST /commentboxes/{id}/comments

댓글 작성 **(Auth)**

Input:

```text
{ content }
```

### POST /commentboxes/{id}/likes

답변글 좋아요 **(Auth)**

### GET /commentboxes/{id}/likes

답변글 좋아요 클릭 확인 **(Auth)**

## Comment

### GET /comments

모든 댓글 조회

Output:

```text
[{ questionId?, answerId?, id, authorId, content, createdAt }] || []
```

### GET /comments/{id}

댓글 조회

Output:

```text
{ questionId?, answerId?, id, authorId, content, createdAt }
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
{ fileName }
```

### GET /file/{hash}

파일 다운로드 **(Auth)**

Output: File

