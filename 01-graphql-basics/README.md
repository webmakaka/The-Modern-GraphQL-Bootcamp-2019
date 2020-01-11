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

<br/>

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

<br/>

### 8. GraphQL Scalar Types

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ id, name, age, employed, gpa }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```
<br/>

**resonse:**

```
{
    "data": {
        "age": 27,
        "employed": true,
        "gpa": 3.1,
        "id": "abc123",
        "name": "Andrew"
    }
}

```

<br/>

### 9. Live Reload for GraphQL-Yoga

<br/>

### 10. Creating Custom Types

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ me {id, name, email, age}, post {id, title, body, published}}" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```
<br/>

**resonse:**

```
{
    "data": {
        "me": {
            "age": 28,
            "email": "mike@example.com",
            "id": "123098",
            "name": "Mike"
        },
        "post": {
            "body": "",
            "id": "092",
            "published": false,
            "title": "GraphQL 101"
        }
    }
}

```

<br/>

### 11. Operation Arguments

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ greeting(name: \"Andrew\", position: \"Teacher\"),  add(a: 2, b: 3) }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "add": 5,
        "greeting": "Hello, Andrew! You are my favorite Teacher!"
    }
}
```

<br/>

### 12. Working with Arrays Part I

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ add(numbers: [5, 10, 15, 20, 25]), grades }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```


<br/>

**resonse:**

```
{
    "data": {
        "add": 75,
        "grades": [
            99,
            80,
            93
        ]
    }
}

```

<br/>

### 13. Working with Arrays Part II

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ users{id, name, email, age} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```


<br/>

**resonse:**

```
{
    "data": {
        "users": [
            {
                "age": 27,
                "email": "andrew@example.com",
                "id": "1",
                "name": "Andrew"
            },
            {
                "age": null,
                "email": "sarah@example.com",
                "id": "2",
                "name": "Sarah"
            },
            {
                "age": null,
                "email": "mike@example.com",
                "id": "3",
                "name": "Mike"
            }
        ]
    }
}


```


<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ users(query: \"A\"){id, name, email, age} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```


<br/>

**resonse:**

```
{
    "data": {
        "users": [
            {
                "age": 27,
                "email": "andrew@example.com",
                "id": "1",
                "name": "Andrew"
            },
            {
                "age": null,
                "email": "sarah@example.com",
                "id": "2",
                "name": "Sarah"
            }
        ]
    }
}


```

<br/>

**request:**

<br/>

```
$ curl \
  -d '{ 
    "query": "{ posts { id, title, body, published} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "posts": [
            {
                "body": "This is how to use GraphQL...",
                "id": "10",
                "published": true,
                "title": "GraphQL 101"
            },
            {
                "body": "This is an advanced GraphQL post...",
                "id": "11",
                "published": false,
                "title": "GraphQL 201"
            },
            {
                "body": "",
                "id": "12",
                "published": false,
                "title": "Programming Music"
            }
        ]
    }
}

```

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ posts(query: \"GraphQL\"){ id, title, body, published} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "posts": [
            {
                "body": "This is how to use GraphQL...",
                "id": "10",
                "published": true,
                "title": "GraphQL 101"
            },
            {
                "body": "This is an advanced GraphQL post...",
                "id": "11",
                "published": false,
                "title": "GraphQL 201"
            }
        ]
    }
}

```

<br/>

### 14. Relational Data Basics

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ posts{ id, title, body, published, author { id, name }} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "posts": [
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "body": "This is how to use GraphQL...",
                "id": "10",
                "published": true,
                "title": "GraphQL 101"
            },
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "body": "This is an advanced GraphQL post...",
                "id": "11",
                "published": false,
                "title": "GraphQL 201"
            },
            {
                "author": {
                    "id": "2",
                    "name": "Sarah"
                },
                "body": "",
                "id": "12",
                "published": false,
                "title": "Programming Music"
            }
        ]
    }
}

```


<br/>

### 15. Relational Data Arrays

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ users{ id, name, email, posts { id, title }} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "users": [
            {
                "email": "andrew@example.com",
                "id": "1",
                "name": "Andrew",
                "posts": [
                    {
                        "id": "10",
                        "title": "GraphQL 101"
                    },
                    {
                        "id": "11",
                        "title": "GraphQL 201"
                    }
                ]
            },
            {
                "email": "sarah@example.com",
                "id": "2",
                "name": "Sarah",
                "posts": [
                    {
                        "id": "12",
                        "title": "Programming Music"
                    }
                ]
            },
            {
                "email": "mike@example.com",
                "id": "3",
                "name": "Mike",
                "posts": []
            }
        ]
    }
}

```

<br/>

### 16. Comment Challenge Part I

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ comments { id, text} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "comments": [
            {
                "id": "102",
                "text": "This worked well for me. Thnaks!"
            },
            {
                "id": "103",
                "text": "Glad you enjoyed it."
            },
            {
                "id": "104",
                "text": "This did no work!"
            },
            {
                "id": "105",
                "text": "Nevermind. I got it to work."
            }
        ]
    }
}

```

<br/>

### 17. Comment Challenge Part II

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ comments { id, text, author {id, name} } }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "comments": [
            {
                "author": {
                    "id": "3",
                    "name": "Mike"
                },
                "id": "102",
                "text": "This worked well for me. Thnaks!"
            },
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "id": "103",
                "text": "Glad you enjoyed it."
            },
            {
                "author": {
                    "id": "2",
                    "name": "Sarah"
                },
                "id": "104",
                "text": "This did no work!"
            },
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "id": "105",
                "text": "Nevermind. I got it to work."
            }
        ]
    }
}

```

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ users{ id, name, email, posts { id, title }, comments { id, text}} }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "users": [
            {
                "comments": [
                    {
                        "id": "103",
                        "text": "Glad you enjoyed it."
                    },
                    {
                        "id": "105",
                        "text": "Nevermind. I got it to work."
                    }
                ],
                "email": "andrew@example.com",
                "id": "1",
                "name": "Andrew",
                "posts": [
                    {
                        "id": "10",
                        "title": "GraphQL 101"
                    },
                    {
                        "id": "11",
                        "title": "GraphQL 201"
                    }
                ]
            },
            {
                "comments": [
                    {
                        "id": "104",
                        "text": "This did no work!"
                    }
                ],
                "email": "sarah@example.com",
                "id": "2",
                "name": "Sarah",
                "posts": [
                    {
                        "id": "12",
                        "title": "Programming Music"
                    }
                ]
            },
            {
                "comments": [
                    {
                        "id": "102",
                        "text": "This worked well for me. Thnaks!"
                    }
                ],
                "email": "mike@example.com",
                "id": "3",
                "name": "Mike",
                "posts": []
            }
        ]
    }
}

```

<br/>

### 18. Comment Challenge Part III

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ comments { id, text, author {id, name}, post {id, title} } }" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "comments": [
            {
                "author": {
                    "id": "3",
                    "name": "Mike"
                },
                "id": "102",
                "post": {
                    "id": "10",
                    "title": "GraphQL 101"
                },
                "text": "This worked well for me. Thanks!"
            },
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "id": "103",
                "post": {
                    "id": "10",
                    "title": "GraphQL 101"
                },
                "text": "Glad you enjoyed it."
            },
            {
                "author": {
                    "id": "2",
                    "name": "Sarah"
                },
                "id": "104",
                "post": {
                    "id": "11",
                    "title": "GraphQL 201"
                },
                "text": "This did no work!"
            },
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "id": "105",
                "post": {
                    "id": "11",
                    "title": "GraphQL 201"
                },
                "text": "Nevermind. I got it to work."
            }
        ]
    }
}

```

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "{ posts{ id, title, body, published, author { id, name }, comments {id, text} }}" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "posts": [
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "body": "This is how to use GraphQL...",
                "comments": [
                    {
                        "id": "102",
                        "text": "This worked well for me. Thanks!"
                    },
                    {
                        "id": "103",
                        "text": "Glad you enjoyed it."
                    }
                ],
                "id": "10",
                "published": true,
                "title": "GraphQL 101"
            },
            {
                "author": {
                    "id": "1",
                    "name": "Andrew"
                },
                "body": "This is an advanced GraphQL post...",
                "comments": [
                    {
                        "id": "104",
                        "text": "This did no work!"
                    },
                    {
                        "id": "105",
                        "text": "Nevermind. I got it to work."
                    }
                ],
                "id": "11",
                "published": false,
                "title": "GraphQL 201"
            },
            {
                "author": {
                    "id": "2",
                    "name": "Sarah"
                },
                "body": "",
                "comments": [],
                "id": "12",
                "published": false,
                "title": "Programming Music"
            }
        ]
    }
}

```

<br/>

## 3. GraphQL Basics Mutations

<br/>

### 1. Section Intro GraphQL Basics Mutations

<br/>

### 2. Creating Data with Mutations Part I

    $ npm install --save uuid

<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "mutation {createUser(name:\"Andrew\", email:\"testing@exmple.com\") {id, name, email, age}}" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "createUser": {
            "age": null,
            "email": "testing@exmple.com",
            "id": "cd6eed60-8dfc-4c9c-9549-f59d685f197a",
            "name": "Andrew"
        }
    }
}
```

<br/>

### 3. Creating Data with Mutations Part II


<br/>

**request:**

```
$ curl \
  -d '{ 
    "query": "mutation {createPost(title: \"My new post\", body: \"\", published: false, author: 1) {id, title, body, published, author {name} }}" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "createPost": {
            "author": {
                "name": "Andrew"
            },
            "body": "",
            "id": "b6d2ba7a-6e24-4e18-8dbf-b50c8262f4c4",
            "published": false,
            "title": "My new post"
        }
    }
}

```


```
$ curl \
  -d '{ 
    "query": "mutation {createComment(text: \"You should check out David Cutter Music\", author: 1, post: 10) {id, text, author {name}, post {title} }}" 
  }' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:4000  \
  | python -m json.tool
```

<br/>

**resonse:**

```
{
    "data": {
        "createComment": {
            "author": {
                "name": "Andrew"
            },
            "id": "437e610d-ad0b-41be-a913-bc897aec7f99",
            "post": {
                "title": "GraphQL 101"
            },
            "text": "You should check out David Cutter Music"
        }
    }
}


```

<br/>

### 4. The Object Spread Operator with Node.js

    $ npm install --save babel-plugin-transform-object-rest-spread

    

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>