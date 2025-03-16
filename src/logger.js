// ANSI escape codes
const reset = "\x1b[0m"; // Reset
const bold = "\x1b[1m"; // Bold
const cyan = "\x1b[36m"; // Cyan
const yellowBright = "\x1b[93m"; // Yellow Bright
const blue = "\x1b[34m"; // Blue
const green = "\x1b[32m"; // Green
const red = "\x1b[31m"; // Red

export const logger = (req, res, next) => {
  const StartTime = new Date();

  const date = new Date();
  const url = req.originalUrl;
  const method = req.method;

  console.log(`\n\n${cyan}${bold}Request Log:${reset}`);

  console.log(
    `${yellowBright}${bold}TimeStamp: ${date.toLocaleString()}${reset}`
  );
  console.log(`Method:${blue}${method}, URL:${blue}${url}${reset}`);

  // Listen for the finish event to get the status code
  // status
  res.on("finish", () => {
    const status = res.statusCode;
    console.log(`${cyan}${bold}Response Status:${reset}`);

    if (status >= 500) {
      console.log(
        `Status Internal Server Error: ${red}${bold}${status}${reset}`
      );
    } else if (status >= 400 && status !== 404) {
      console.log(
        `Status Unauthorized/Bad Request: ${red}${bold}${status}${reset}`
      );
    } else if (status === 404) {
      console.log(`Status Not Found: ${red}${bold}${status}${reset}`);
    } else if (status >= 200) {
      console.log(`Status Success: ${green}${bold}${status}${reset}`);
    } else {
      console.log(`Status Continue: ${blue}${bold}${status}${reset}`);
    }

    // response time

    console.log(`${cyan}${bold}Response Time:${reset}`);

    const EndTime = new Date();
    const duration = EndTime - StartTime;
    console.log(`Response Time: ${blue}${bold}${duration} ms${reset}`);
  });

  next();
};

export const bodyLogger = (req, res, next) => {
  console.log(`${cyan}${bold}Request Body:${reset}`);
  console.log(req.body);

  next();
};

export const paramLogger = (req, res, next) => {
  console.log(`${cyan}${bold}Request Params:${reset}`);
  let params = req.params;
  console.log(req.params);
  next();
};

export const queryLogger = (req, res, next) => {
  console.log(`${cyan}${bold}Request Query:${reset}`);
  console.log(req.query);
  next();
};

export const headersLogger = (req, res, next) => {
  console.log(`${cyan}${bold}Request Headers:${reset}`);
  console.log(req.headers);
  console.log(`${cyan}${bold}Response Headers:${reset}`);
  console.log(res.getHeaders());
  next();
};
