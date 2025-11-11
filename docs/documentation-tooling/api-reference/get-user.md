---
id: get-user
title: Get User
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Retrieve details of a specific user by their ID.

## Endpoint
`GET https://jsonplaceholder.typicode.com/users/{id}`

## Parameters

| Name | Type   | Required | Description                |
|------|--------|----------|----------------------------|
| id   | number | Yes      | The unique ID of the user. |


## Example Requests

<Tabs>
  <TabItem value="cURL" label="cURL">

```bash
curl https://jsonplaceholder.typicode.com/users/1
```

  </TabItem>

  <TabItem value="JavaScript" label="JavaScript (fetch)">

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data));
```

  </TabItem>

  <TabItem value="Python" label="Python (requests)">

```python
import requests

response = requests.get("https://jsonplaceholder.typicode.com/users/1")
print(response.json())
```

  </TabItem>
</Tabs>


## Successful Response

```json
{
  "id": 1,
  "name": "AbdulRaheem Olurode",
  "username": "Don",
  "email": "abdulraheem@example.com",
  "address": {
    "street": "Lawanson Street",
    "suite": "Apt. 505",
    "city": "Lagos",
    "zipcode": "82725"
  },
  "phone": "234-081-6945-3895",
  "website": "www.peerlesstechnologies.com",
  "company": {
    "name": "Peerless Technologies",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time user experiences"
  }
}
```


## Error Responses

| Status Code | Description                             |
| ----------- | --------------------------------------- |
| 404         | User not found (invalid or missing ID). |
| 500         | Internal server error.                  |

```json
{
  "error": "User not found"
}
```

<details>
  <summary>Expand to see why this endpoint is useful</summary>

This endpoint is perfect for:

* Practicing API integration with mock data.
* Building tutorials without needing a real backend.
* Quickly testing request/response flows in Postman or curl.

</details>