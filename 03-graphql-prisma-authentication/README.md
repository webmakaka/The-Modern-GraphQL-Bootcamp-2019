# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# GraphQL Prisma Authentication

<br/>

## 6. Authentication with GraphQL

I recreated postgresql database (heroku). Because there was an error.

**Need to work with local project (no prisma)**

    $ npm start

http://localhost:4000/

<br/>

### 02. Adding Prisma into GraphQL Queries

<br/>

```
mutation {
  createUser(
    data: {
      name: "Andrey Mead",
      email: "andrew@example.com"
    }
  ) {
    id,
    name
  }
}
```

<br/>

```
mutation {
  createPost(
    data: {
      title: "Prisma title",
      body: "Prisma body",
      published: false,
      author: {
        connect: {
          id: "ck6bvjuch001307371hgg0s7o"
        }
      }
    }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}
```

<br/>

```
query{
  users {
    id,
    name,
    posts {
      id
    }
  }
}
```

<br/>

```
query{
  posts {
    title,
    body,
    published,
  }
}
```

<br/>

### 03. Integrating Operation Arguments

```
query{
  users (query: "andrew@example.com")  {
    id,
    name,
   email
  }
}
```

<br/>

```
query{
  posts (
    query: "isma"
  ) {
    title,
    body,
    published,
  }
}
```

<br/>

### 04. Refactoring Custom Type Resolvers

<br/>

### 05. Adding Prisma into GraphQL Mutations

```
mutation {
  createUser(
    data: {
      name: "Jess",
      email: "jess@example.com"
    }
  ) {
    id,
    name,
    email
  }
}
```

<br/>

```
mutation {
  deleteUser(
    id: "ck6bznba000ms0737fo4vkzdn"
  ) {
    id,
    name,
    email
  }
}
```

<br/>

### 06. Adding Prisma into GraphQL Update Mutations Part I

```
mutation {
  updateUser(
    id: "ck6bvjuch001307371hgg0s7o",
    data: {
      name: "Andrew Mead1"
    }
  ){
    id,
    name,
    email
  }
}
```

<br/>

```
mutation {
  createPost(
    data: {
      title: "Stories by Jess",
      body: "...",
      published: true,
      author: "ck6bvjuch001307371hgg0s7o"
      }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}

```

<br/>

### 07. Adding Prisma into GraphQL Update Mutations Part II

```
mutation{
  deletePost(id: "ck6ca6fvt00na0737zhweer3o"){
    id,
    title,
    body,
    published
  }
}
```

<br/>

```
mutation {
  updatePost(
      id: "ck6bvke8j001l0737yxoxf1vt",
    data: {
      title: "Stories by Jess",
      body: "...",
      published: true
      }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}

```

<br/>

    $ npm run get-schema

<br/>

```
mutation {
  createComment(
    data: {
      text: "This should be in Prisma!",
      author: "ck6bvjuch001307371hgg0s7o",
      post: "ck6bvke8j001l0737yxoxf1vt"
    }
  )
    {
      id,
      text
    }
}
```

<br/>

```
query{
  comments{
    id,
    text,
    author {
      id,
      name
    }
  }
}
```

<br/>

```
mutation {
  updateComment(
    id: "ck6cd8xaw00nx0737cpi3k3nw",
    data: {
      text: "New text for comment!"
    }
  )
    {
      id,
      text
    }
}
```

<br/>

```
mutation {
  deleteComment(
    id: "ck6cd8xaw00nx0737cpi3k3nw"
  ) {
    id
    text
  }
}
```

<br/>

### 08. Adding Prisma into GraphQL Subscriptions

<br/>

    $ npm run get-schema

<br/>

![Application](../img/pic-03-01.png?raw=true)

<br/>

```
subscription{
  comment (postId: "ck6cezzl700oo0737brmzed77") {
    mutation,
    node {
      id,
      text,
      author {
        id,
        name
      }
    }
  }
}
```

<br/>

```
mutation {
  createComment(
    data: {
      text: "This should be in Prisma 6 !",
      author: "ck6bvjuch001307371hgg0s7o",
      post: "ck6bvke8j001l0737yxoxf1vt"
    }
  )
    {
      id,
      text
    }
}
```

<br/>

```
subscription {
  post {
    mutation
    node {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
}

```

<br/>

```
mutation {
  createPost(
    data: {
      title: "Stories by Jess 2",
      body: "...",
      published: true,
      author: "ck6bvjuch001307371hgg0s7o"
      }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}

```

<br/>

![Application](../img/pic-03-02.png?raw=true)

<br/>

### 09. Closing Prisma to the Outside World

    $ prisma deploy
    $ prisma token

    $ npm start

<br/>

![Application](../img/pic-03-03.png?raw=true)

<br/>

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazZvNzg5YW8wMDBmMDc4OXF4cGhtanJxIiwiaWF0IjoxNTgxOTYxMzA2fQ.0YV6X3QwjkOw5lqdcKhZXLh8WSUGryL2zgrUaDbqUKk"
}

```

<br/>

### 10. Allowing for Generated Schemas

    $ prisma delete
    $ prisma deploy

I recreated postgresql database (heroku). Because there was an error.

    $ docker-compose stop
    $ docker-compose up -d

    $ prisma deploy

    $ npm run get-schema

<br/>

### 11. Storing Passwords

https://www.npmjs.com/package/bcryptjs

<br/>

    $ npm uninstall --save uuid
    $ npm install --save bcryptjs

http://localhost:4000/

<br/>

I restarted docker-compose

<br/>

    $ npm run get-schema

<br/>

```
mutation {
  createUser(
    data: {
      name: "Marley",
      email: "marley@example.com",
      password: "password123"
    }
  ) {
    id,
    name,
    email
  }
}
```

<br/>

### 12. Creating Auth Tokens with JSON Web Tokens

https://www.npmjs.com/package/jsonwebtoken

    $ npm install --save jsonwebtoken

<br/>

**request:**

```
mutation {
  createUser(
    data: {
      name: "Jess",
      email: "jess@example.com",
      password: "password123"
    }
  ) {
    user {
      id,
      name,
      email
    },
    token
  }
}
```

<br/>

**response:**

```
{
  "data": {
    "createUser": {
      "user": {
        "id": "ck6o789ao000f0789qxphmjrq",
        "name": "Jess",
        "email": "jess@example.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODE4MDczMDZ9.VihhXxxQW5Qab3hTWxvottPM-_eYoZ6GhFXOJ_EYX8o"
    }
  }
}
```

<br/>

### 13. Logging in Existing Users

```
mutation {
  login(data: { email: "jess@example.com", password: "password123" }) {
    user {
      id,
      name
    },
    token
  }
}

```

<br/>

### 14. Validating Auth Tokens

<br/>

![Application](../img/pic-03-04.png?raw=true)

<br/>

### 15. Locking Down Mutations (Users)

<br/>

```
mutation {
  updateUser(
    data: {
      name: "Marley5",
      email: "marley5@example.com"
    }
  ){
    id,
    name,
    email
  }
}
```

<br/>

```
mutation {
  deleteUser {
    id,
    name,
    email
  }
}

```

<br/>

```
mutation {
  createPost(
    data: {
      title: "Jess super Girl  111!",
      body: "...",
      published: false
      }
  ){
    id,
    title,
    body,
    published
  }
}
```

<br/>

```
mutation{
  deletePost(id: "ck6qo04lx001x08896d0e0npt"){
    id,
    title,
    body,
    published
  }
}

```

<br/>

### 16. Locking Down Mutations (Posts and Comments)

```
mutation {
  updatePost(
      id: "ck6qp80q9002y0889zdx4i08l",
    data: {
      title: "Jess is awesome Girl!",
      body: "...",
      published: true
      }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}

```

<br/>

```

mutation {
  createComment(
    data: {
      text: "Jess Comments It !",
      post: "ck6qohbqd002m0889je4aqzu2"
    }
  )
    {
      id,
      text
    }
}

```

<br/>

```
query{
  posts {
    id,
    title,
    body,
    published,
    comments {
      id,
      text
    }
  }
}

```

<br/>

```
mutation {
  updateComment(
    id: "ck6qq84v5003z0889lxycb9p8",
    data: {
      text: "Wrong comment! Please Delete!"
    }
  )
    {
      id,
      text
    }
}
```

<br/>

```
mutation {
  deleteComment(
    id: "ck6qq84v5003z0889lxycb9p8"
  ) {
    id
    text
  }
}
```

<br/>

### 17. Locking Down Queries Part I

<br/>

```
query {
  post(id:"ck6qohbqd002m0889je4aqzu2"){
    id,
    title,
    body,
    published
  }
}
```

<br/>

```
mutation {
  updatePost(
      id: "ck6qohbqd002m0889je4aqzu2",
    data: {
      published: false
      }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}
```

Only post author can find unpublished post

<br/>

```
query{
  me {
    id,
    name,
    email
  }
}
```

<br/>

### 18. Locking Down Queries Part II

```
query{
  myPosts {
    id,
    title,
    published,
    body
  }
}
```

<br/>

![Application](../img/pic-03-05.png?raw=true)

<br/>

### 19. Locking Down Individual Type Fields

```
query{
  users {
    id,
    name,
    email
  }
}
```

Only owner email shows

But some issue on delete id from the query.

<br/>

### 20. Fragments

```
query{
  users {
    ...userFields,
    email
  }
}

fragment userFields on User {
  id,
  name,
  posts {
    id
  }
}
```

<br/>

After code changes works

<br/>

```
query{
  users {
    email
  }
}

```

<br/>

```
query{
  users {
    id,
    name,
    posts {
      id,
      title,
      published
    }
  }
}
```

Only published posts shows

<br/>

### 21. Cleaning up Some Edge Cases

<br/>

### 22. Locking Down Subscriptions

```
subscription {
  myPost {
    mutation
    node {
      id
      title
      body
      author {
        id
        name
      }
    }
  }
}

```

<br/>

```
mutation {
  updatePost(
      id: "ck6qohbqd002m0889je4aqzu2",
    data: {
      published: false
      }
  ){
    id,
    title,
    body,
    published,
    author {
      id,
      name
    }
  }
}
```

<br/>

![Application](../img/pic-03-06.png?raw=true)

<br/>

### 23. Token Expiration

<br/>

### 24. Password Updates

```
mutation {
  createUser(
    data: {
      name: "Sahar",
      email: "sahar@example.com",
      password: "password123"
    }
  ) {
    user {
      id,
      name,
      email
    },
    token
  }
}
```

<br/>

```
mutation {
  login(data: { email: "sahar@example.com", password: "password123" }) {
    user {
      id,
      name
    },
    token
  }
}
```

<br/>

```
mutation {
  updateUser(
    data: {
      password: "password12345"
    }
  ){
    id,
    name,
    email
  }
}
```

<br/>

## 7. Pagination and Sorting with GraphQL

<br/>

### 02. Pagination

```
query{
  users(
    first: 2,
    skip: 1
  ) {
    id,
    name
  }
}
```

<br/>
<br/>

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
