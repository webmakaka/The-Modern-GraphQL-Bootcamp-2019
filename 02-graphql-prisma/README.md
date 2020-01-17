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

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>
