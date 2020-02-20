# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# GraphQL Prisma Production Deployment

<br/>

## 8. Production Deployment

<br/>

### 02. Creating a Prisma Service

prisma.io

servers --> add new --> create a server

<br/>

![Application](../img/pic-08-01.png?raw=true)

<br/>

![Application](../img/pic-08-02.png?raw=true)

create new database --> heroku --> create databse

<br/>

![Application](../img/pic-08-03.png?raw=true)

<br/>

![Application](../img/pic-08-04.png?raw=true)

<br/>

set up a server

<br/>

![Application](../img/pic-08-05.png?raw=true)

<br/>
<br/>

<br/>

![Application](../img/pic-08-06.png?raw=true)

<br/>

![Application](../img/pic-08-07.png?raw=true)

<br/>

### 03. Prisma Configuration and Deployment

    $ prisma deploy -e ../config/dev.env

<br/>

    $ prisma login

Grant Persmission

    $ prisma deploy -e ../config/prod.env

<br/>

```
? Set up a new Prisma server or deploy to an existing server? marley/the-modern-
graphql-bootcamp
? Choose a name for your service the-modern-graphql-bootcamp
? Choose a name for your stage prod

```

<br/>

![Application](../img/pic-08-08.png?raw=true)

<br/>

### 04. Exploring the Production Prisma Instance

<br/>

```
mutation {
  createUser(
    data: {
      name: "Andrey Mead",
      email: "andrew@example.com",
      password: "password123"
    }
  ) {
    id,
    name
  }
}
```

<br/>

![Application](../img/pic-08-08.png?raw=true)

<br/>
<br/>

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
