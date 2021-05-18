# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# Creating a Boilerplate Project

<br/>

## 10. Creating a Boilerplate Project

<br/>

### 02. Creating a Boilerplate Project

<br/>

### 03. Using the Boilerplate Project

    $ cd api/prisma/
    $ prisma deploy -e ../config/dev.env
    $ prisma deploy -e ../config/test.env

<br/>

    $ cd ../
    $ npm install

<br/>

    $ npm run get-schema

<br/>

    $ npm run test
    ~C

<br/>

    $ npm run dev

<br/>

http://localhost:4000/

<br/>

**prod**

    $ cd api/prisma/
    $ prisma deploy -e ../config/prod.env

<br/>

    $ cd ../
    $ heroku create
    $ heroku config:set PRISMA_ENDPOINT=https://whispering-journey-12002.herokuapp.com/the-modern-graphql-bootcamp/food/prod PRISMA_SECRET=MyProdSuperSecret1234 JWT_SECRET=MyProdJWTSuperSecret1234

<br/>

    $ heroku config
    $ git commit -am "Setup food project"

<br/>

    $ git push heroku master

<br/><br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
