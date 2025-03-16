# **Node Super Logger**

![Node Super Logger](https://img.shields.io/npm/v/node-super-logger?style=flat-square)
![License](https://img.shields.io/npm/l/node-super-logger?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/node-super-logger?style=flat-square)

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
npm install node-super-logger
```

Or using yarn:

```sh
yarn add node-super-logger
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
  headersLogger,
} from "node-super-logger";

const app = express();
app.use(express.json()); // To parse JSON request bodies

// Apply the logger middleware
app.use(logger);
app.use(bodyLogger);
app.use(paramLogger);
app.use(queryLogger);
app.use(headersLogger);

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

### **5. Headers Logger (headersLogger)**

Logs Detailed request & response Headers

```javascript
app.use(headersLogger);
```

📌 **Example Output:**

```
Request Headers:
{
  "content-type": "application/json",
  "user-agent": "SomeUserAgent/1.0",
  "accept": "*/*",
  "cache-control": "no-cache",
  "postman-token": "dummy-token-1234567890",
  "host": "localhost:3000",
  "accept-encoding": "gzip, deflate, br",
  "connection": "keep-alive",
  "content-length": "563",
  "cookie": "jwt=dummy-jwt-token-placeholder"
}

Response Headers:
{
  "content-security-policy": "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
  "cross-origin-opener-policy": "same-origin",
  "cross-origin-resource-policy": "same-origin",
  "origin-agent-cluster": "?1",
  "referrer-policy": "no-referrer",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "x-dns-prefetch-control": "off",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-xss-protection": "0"
}
```

---

## **Repository & Issues**

GitHub Repository: [node-super-logger](https://github.com/sheikhamir1/node-super-logger)  
Found an issue? Report it here: [Issues](https://github.com/sheikhamir1/node-super-logger/issues)

---

## **License**

This package is licensed under the ISC License.

Happy Logging! 🚀

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

# node-super-logger - Version 1.1.1 Update

**Version**: 1.1.1  
**Package**: `node-super-logger`

---

## Overview

In version **1.1.1**, significant updates have been made to the **node-super-logger** package. The key change is the removal of the npm-scoped package prefix, **@amirsohail1/**, which has been replaced by the simplified package name **node-super-logger**. When installing the package, ensure that you use the correct name:

```bash
npm install node-super-logger
```

Additionally, several exciting new features and improvements have been introduced in this release.

---

## Key Changes and Features

### 1. **Package Name Change**

- **Previous Name**: `@amirsohail1/node-super-logger`
- **Updated Name**: `node-super-logger`
- **Action**: Ensure you install the package using the new name:
  ```bash
  npm install node-super-logger
  ```

### 2. **New Feature: HeaderLogger**

- A new feature, **HeaderLogger**, has been added to improve the logging experience.
- **HeaderLogger** provides detailed insights into HTTP request headers. This will allow you to examine the headers in-depth, including the response headers that are sent to the client.
- This feature is crucial for debugging and ensuring that headers are correctly set for the response sent to the client.

### 3. **Logger Enhancements**

- **Updated Logger**: The logger itself has been updated for improved functionality and ease of use.
- **Status Code Logging**: The logger now includes the status code of HTTP responses. This makes it easier to track the success or failure of requests, with appropriate logging for different status codes.
  - Example: 200 for success, 400 or 500 for errors.
- **Color-Coded Logs**: The logger now uses color coding to differentiate between different types of responses:
  - **Success**: Green color for successful responses.
  - **Error**: Red color for errors or failure responses.
- This enhancement helps in easily identifying the status of each HTTP request in logs, improving readability and diagnostics.

### 4. **Performance Tracking**

- A new metric, **Response Time (in milliseconds)**, has been added to track the performance of your application. This enables you to monitor how quickly responses are being served and identify potential performance bottlenecks.

---

## Summary of Key Changes:

1. **Package name change**: Use `node-super-logger` (without the scoped prefix).
2. **New HeaderLogger**: Log and inspect detailed request and response headers.
3. **Enhanced Logger**: Now includes status code and color-coded logs for errors and success.
4. **Response Time**: Logs the time taken for each request/response in milliseconds for better performance tracking.

---

## Conclusion

With version 1.1.1, **node-super-logger** has become even more powerful by adding key features like detailed header logging, improved logging of HTTP status codes, color-coded logs, and response time tracking. These changes aim to enhance the overall logging and debugging experience while helping you monitor the performance of your application more effectively.

Make sure to update to the latest version and start utilizing these new features for a better logging and performance monitoring experience.
