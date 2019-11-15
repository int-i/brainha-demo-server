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

- [ ] 모든 답변글 조회
- [ ] 답변글 조회
- [ ] 답변글 강제 수정
- [ ] 답변글 수정
- [ ] 답변글 강제 삭제
- [ ] 답변글 삭제
- [ ] **댓글 작성**
- [ ] 답변글 좋아요
- [ ] 답변글 좋아요 클릭 확인

### Comment

- [ ] 모든 댓글 조회
- [ ] 댓글 조회
- [ ] 댓글 강제 수정
- [ ] 댓글 수정
- [ ] 댓글 강제 삭제
- [ ] 댓글 삭제

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
[{ id, plan_id?, user_id?, vaild, started_at, ended_at, canceled_at? }]
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
{ sid, name?, department_id?, email?, password, profile_url? }
```

Output:

```text
{ token }
```

### GET /users

모든 사용자 조회 **(Auth: Manager)**

Output:

```text
[{ sid, name, department_id, email, permission, reputation, profile_url, created_at }] || []
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

로그인(JWT 토큰 발급)

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
{ planId, startedAt, endedAt }
```

### DELETE /users/subscription

구독 해지 **(Auth)**

## Board

### POST /boards

새 게시판 생성 **(Auth: Manager)**

Input:

```text
{ name, description?, type, category_id? }
```

### GET /boards

모든 게시판 정보 조회

Output:

```text
[{ id, name, description, type, category_id, created_at ] || []
```

### GET /boards/{id}

게시판 정보 조회

Output:

```text
{ id, name, description, type, category_id, created_at } || {}
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

글 작성 **(Auth)**

Input:

```text
{ title, content, tags }
```

### GET /boards/{id}/posts

게시판 글 조회

Output:

```text
[{ id, board_id, author_id, title, content, tags, views, likes, created_at }] || []
```

## Post

### GET /posts

모든 글 조회

Output:

```text
[{ board_id, id, author_id, title, content, tags, views, likes, created_at }] || []
```

### GET /posts/{id}

질문글 조회

Output:

```text
{ board_id, id, author_id, title, content, tags, views, likes, created_at }
```

### PATCH /posts/{id}

질문글 강제 수정 **(Auth: Manager)**

Input:

```text
{ board_id, title, content, tags }
```

### PATCH /posts/{id}

질문글 수정 **(Auth)**

Input:

```text
{ board_id, title, content, tags }
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
[{ id, question_id, author_id, content, likes, created_at }] || []
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
[{ question_id, id, author_id, content, likes, created_at }] || []
```

### GET /commentboxes/{id}

답변글 조회

Output:

```text
{ question_id, id, author_id, content, likes, created_at }
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

