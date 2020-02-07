# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# GraphQL Prisma Authentication

<br/>

## 6. Authentication with GraphQL

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

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
