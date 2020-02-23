# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# Apollo Client

<br/>

## 9. Apollo Client and Testing GraphQL

<br/>

### 02. Setting up a Test Environment

    $ cd prisma
    $ prisma deploy -e ../config/test.env

http://localhost:4466/default/test

<br/>

### 03 Installing and Exploring Jest

https://jestjs.io/

    $ npm install --save-dev jest
    $ npm run test

<br/>

### 04. Testing and Assertions

No project sensitive examples

<br/>

### 05. Apollo Client in the Browser Part I

https://parceljs.org/

    $ cd 05-apollo-client/api/
    $ npm run dev

<br/>

    $ cd 05-apollo-client/apollo/
    $ npm init -y
    $ npm install --save-dev parcel-bundler

<br/>

    $ npm run start

<br/>

### 06. Apollo Client in the Browser Part II

<br/>

Recreated database again!

<br/>

```
mutation {
  createUser(
    data: {
      name: "Marley",
      email: "malrey@example.com",
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
  login(data: { email: "malrey@example.com", password: "password123" }) {
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
query{
  me {
    id,
    name,
    email
  }
}
```

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

```
mutation {
  createPost(
    data: {
      title: "This course is awesome",
      body: "It is true!!!",
      published: true
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

https://www.apollographql.com/

    $ cd 05-apollo-client/apollo/
    $ npm install --save apollo-boost graphql

    $ npm run start

<br/>

![Application](../img/pic-09-01.png?raw=true)

<br/>

### 07. Configuring Jest to Start the GraphQL Server

https://jestjs.io/docs/en/configuration

<br/>

use

"jest": "^23.6.0"

<br/>

    $ cd 05-apollo-client/api
    $ npm install --save-dev babel-register

<br/>

    $ npm run test

<br/>

![Application](../img/pic-09-02.png?raw=true)

<br/>

### 08. Testing Mutations

    $ docker-compose stop
    $ docker-compose rm

<br/>
Recreate db on heroku
<br/>

    $ docker-compose up -d

<br/>

    $ cd ../api
    $ npm install --save apollo-boost graphql cross-fetch

<br/>

    $ cd api/prisma
    $ prisma deploy -e ../config/test.env

<br/>

    $ cd ../
    $ npm run test

<br/>

![Application](../img/pic-09-03.png?raw=true)

<br/>

### 09. Seeding the Database with Test Data

<br/>

### 10. Testing Queries

<br/>

### 11. Expecting GraphQL Operations to Fail

<br/>
<br/>

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
