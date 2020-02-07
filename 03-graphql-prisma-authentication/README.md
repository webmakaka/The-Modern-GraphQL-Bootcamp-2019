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

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
