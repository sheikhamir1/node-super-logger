import chalk from "chalk";

export const logger = (req, res, next) => {
  const StartTime = new Date();

  const date = new Date();
  const url = req.originalUrl;
  const method = req.method;

  console.log(`\n\n${chalk.cyan.bold("Request Log:")}`);

  console.log(chalk.yellowBright.bold(`TimeStamp: ${date.toLocaleString()}`));
  console.log(`Method:${chalk.blue(method)}, URL:${chalk.blue(url)}`);

  // Listen for the finish event to get the status code
  // status
  res.on("finish", () => {
    const status = res.statusCode;
    if (status >= 500) {
      console.log(`Status: ${chalk.red.bold(status)}`);
    } else if (status >= 400) {
      console.log(`Status: ${chalk.red.bold(status)}`);
    } else if (status >= 200) {
      console.log(`Status: ${chalk.green.bold(status)}`);
    } else {
      console.log(`Status: ${chalk.blue.bold(status)}`);
    }

    const EndTime = new Date();
    const duration = EndTime - StartTime;
    console.log(`Response Time: ${chalk.blue.bold(duration)} ms`);
  });

  next();
};

export const bodyLogger = (req, res, next) => {
  console.log(`${chalk.cyan.bold("Request Body:")}`);
  console.log(req.body);
  next();
};

export const paramLogger = (req, res, next) => {
  console.log(`${chalk.cyan.bold("Request Params:")}`);
  let params = req.params;
  console.log(req.params);
  next();
};

export const queryLogger = (req, res, next) => {
  console.log(`${chalk.cyan.bold("Request Query:")}`);
  console.log(req.query);
  next();
};
