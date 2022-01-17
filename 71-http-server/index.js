const users = [
  {
    id: 1,
    name: "Vasile",
  },
  {
    id: 2,
    name: "Sam",
  },
  {
    id: 3,
    name: "Alex",
  },
  {
    id: 4,
    name: "Tom",
  },
];

const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello');
};
const server = http.createServer(requestListener);
server.listen(8080);