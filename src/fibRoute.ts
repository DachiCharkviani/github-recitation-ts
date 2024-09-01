// Endpoint for querying the fibonacci numbers

const fibonacci = require("./fib");

export default (req: { params: {num: string}}, res: { send: (body: string) => void}): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
