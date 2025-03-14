# **Node Super Logger**

![Node Super Logger](https://img.shields.io/npm/v/@amirsohail1/node-super-logger?style=flat-square)
![License](https://img.shields.io/npm/l/@amirsohail1/node-super-logger?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/@amirsohail1/node-super-logger?style=flat-square)

## **Overview**

`node-super-logger` is a simple yet powerful logging middleware for Node.js applications. It logs requests in a colorful and structured way, making debugging easier for developers.

## **Features**

✅ Logs request method, URL, timestamp, and status code.  
✅ Highlights errors and success responses with different colors.  
✅ Logs request body, query parameters, and URL parameters.  
✅ Easy to integrate with any Express.js application.  
✅ Lightweight with zero configuration required.

---

## **Installation**

Install the package using npm:

```sh
npm install @amirsohail1/node-super-logger
```

Or using yarn:

```sh
yarn add @amirsohail1/node-super-logger
```

---

## **Usage**

### **Basic Express.js Integration**

```javascript
import express from "express";
import {
  logger,
  bodyLogger,
  paramLogger,
  queryLogger,
} from "@amirsohail1/node-super-logger";

const app = express();
app.use(express.json()); // To parse JSON request bodies

// Apply the logger middleware
app.use(logger);
app.use(bodyLogger);
app.use(paramLogger);
app.use(queryLogger);

app.get("/test/:id", (req, res) => {
  res.json({ message: "Logging is working perfectly!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## **Middlewares Available**

### **1. Request Logger (logger)**

Logs request details like method, URL, timestamp, response status, and response time.

```javascript
app.use(logger);
```

📌 **Example Output in Console:**

```
Request Log:
Timestamp: 3/2/2025, 10:00:00 AM
Method: GET, URL: /test/123
Status: 200 (Green Highlighted)
Response Time: 12 ms
```

### **2. Body Logger (bodyLogger)**

Logs request body data for POST, requests.

```javascript
app.use(bodyLogger);
```

📌 **Example Output:**

```
Request Body:
{ "name": "John", "email": "john@example.com" }
```

### **3. Params Logger (paramLogger)**

Logs route parameters from dynamic routes like `/user/:id`.

```javascript
app.use(paramLogger);
```

📌 **Example Output:**

```
Request Params:
{ "id": "123" }
```

### **4. Body Logger & Params Logger (Use Both when use put/patch Method)**

Logs route parameters from dynamic routes like `/user/:id`.
Logs request body data for POST, requests. `/user`.

```javascript
app.use(bodyLogger);
app.use(paramLogger);
```

📌 **Example Output:**

```
Request Params:
{ "id": "123" };

Request Body:
{ "name": "John", "email": "john@example.com" };
```

### **4. Query Logger (queryLogger)**

Logs query parameters from URLs like `/search?query=book`.

```javascript
app.use(queryLogger);
```

📌 **Example Output:**

```
Request Query:
{ "query": "book" }
```

---

## **Repository & Issues**

GitHub Repository: [node-super-logger](https://github.com/sheikhamir1/node-super-logger)  
Found an issue? Report it here: [Issues](https://github.com/sheikhamir1/node-super-logger/issues)

---

## **License**

This package is licensed under the ISC License.

Happy Logging! 🚀
