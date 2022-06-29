# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

### [My Prev Doc For this course, Close to original](./Readme-prev.md)

<br/>

    $ npm install
    $ npm run start

<br/>

http://localhost:4000/graphql

<br/>

```
// GET ALL USERS
query {
  users {
    id
    name
    email
    age
  }
}
```

<br/>

```
// GET ALL POSTS
query {
  posts {
    id
    title
    body
    published
  }
}
```

<br/>

```
// GET ALL COMMENTS
query {
  comments {
    id
    text
    author {
      id
      name
    }
    post {
      id
      title
    }
  }
}
```

<br/><br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
