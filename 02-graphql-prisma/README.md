# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# GraphQL Prisma

<br/>

## 05 Database Storage with Prisma

<br/>

### 05. Prisma Ubuntu Setup

heroku.com --> Create New App -->

<br/>

![Application](../img/pic-02-01.png?raw=true)

<br/>

Create App

<br/>

Overview --> Configure Addons

<br/>

![Application](../img/pic-02-02.png?raw=true)

<br/>

Ubuntu Store --> Install pgadmin

<br/>

**Install**

- docker
- docker-compose

<br/>

### 06. Prisma 101

http://prisma.io

    $ npm install -g prisma

<br/>

    $  prisma -v
    Prisma CLI version: prisma/1.34.10 (linux-x64) node-v12.13.1

<br/>

    $ cd 02-graphql-prisma/api/

<br/>

    $ prisma init prisma

    --> Use existing database
    --> PostgreSQL

    Does your database contain existing data?
    --> No

    Use SSL?
    --> Use SSL? Yes

    Select the programming language for the generated Prisma client
    --> Don't generate

<br/>

    $ cd prisma
    $ docker-compose up -d
    $ prisma deploy

http://localhost:4466/

<br/>

### 07. Exploring the Prisma GraphQL API

```
mutation {
  createUser(
    data: {
      name: "Andrey Mead"
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
  createUser(
    data: {
      name: "Vikram"
    }
  ) {
    id,
    name
  }
}
```

<br/>

```
query{
  users {
    id,
    name
  }
}
```

<br/>

```
mutation {
  updateUser(
    where: {
      id: "ck5lxfneg006b0706xaec3ind"
    },
    data: {
      name: "Andrew"
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
  deleteUser (
    where: {
      id: "ck5lxfneg006b0706xaec3ind"
    }){
    id,
    name
  }
}

```

<br/>

### 08. Add Post type to Prisma

pgadmin --> remove tables

<br/>

    $ prisma deploy

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
          id: "ck5lzwfh800n90838emq6q076"
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

### 09. Adding Comment Type to Prisma

<br/>

    $ prisma deploy

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
mutation {
  updatePost(
    where: {
      id: "ck5m02cip00r708384cgc5bp8"
    },
    data: {
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
  createUser(
    data: {
      name: "Marley",
      email: "marley@pochta.ru"
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
  createComment(
    data: {
      text: "A comment from Prisma GraphQL",
      author: {
        connect: {
          id: "ck5m0ub1a019u0838z2qtnjp6"
        }
      },
      post: {
        connect: {
          id: "ck5m02cip00r708384cgc5bp8"
        }
      }}
  )
  {
      id,
      text,
      author{
        id,
        name
      }
  }
}
```

<br/>

```
query {
  comments{
    id,
    text,
    author{
      id,
      name
    }
  }
}
```

<br/>

### 10. Integrating Prisma into a Node.js Project

https://github.com/prisma-labs/prisma-binding

    $ npm install --save prisma-binding

https://github.com/Urigo/graphql-cli

    $ npm install --save graphql-cli

<br/>

    $ npm run get-schema

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
