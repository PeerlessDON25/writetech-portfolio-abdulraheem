---
id: getting-started
title: Getting Started
---

# Getting Started

  
This guide will help you make your **first request** to JSONPlaceholder in just a few minutes.  
No authentication, no API keys. Just simple and fast. 


## Base URL

All endpoints are accessed using the base URL below:

```http
https://jsonplaceholder.typicode.com/
````


## Quick Start

Let’s try fetching a list of posts.

### Request

```http
GET /posts
```

**Example (cURL):**

```bash
curl https://jsonplaceholder.typicode.com/posts
```


### Response (Sample)

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "i am passionate about turning complex concepts into simple solutions",
    "body": "bridging complexity and clarity..."
  },
  {
    "userId": 1,
    "id": 2,
    "title": "technical writer with a knack for storytelling",
    "body": "i craft narratives that make technology accessible and engaging."
  }
]
```

## Try It in Your Code

### JavaScript (Fetch)

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data));
```

### Python (Requests)

```python
import requests

response = requests.get("https://jsonplaceholder.typicode.com/posts")
print(response.json())
```


## Next Steps

- Explore the available resources:
  - [Users](./api-reference/get-user.md)
  - [Posts](./api-reference/post.md)
- Learn how to create, update, and delete resources with fake data.

---
