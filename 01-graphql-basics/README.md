# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2019, ENG]

# GraphQL Basics

<br/>

## 2. GraphQL Basics Schemas and Queries

<br/>

### 5. Setting up Babel

    $ npm init -y
    $ npm install -g nodemon
    $ npm install --save babel-cli babel-preset-env

<br/>

### 6. ES6 ImportExport

<br/>

### 7. Creating Your Own GraphQL API

    $ npm install --save graphql-yoga

<br/>


**request:**

```
$ curl \
  -d '{ 
    "query": "{ hello, name, location, bio }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

**resonse:**

```
{
    "data": {
        "bio": "I live in Philly and teach on Udemy!",
        "hello": "This is my first query!",
        "location": "Philadelphia",
        "name": "Andrew Mead"
    }
}


```

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>