const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  }
});

server.listen(3000);

console.log("Server is listening on port 3000");
