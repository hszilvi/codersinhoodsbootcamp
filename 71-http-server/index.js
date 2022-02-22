const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express(); // this is my server
const http = require('http');
const fs = require('fs');
const { response } = require('express');

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
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.status(200).send('Hello');
// });
// app.get('/users', (req, res) => {
//   if (users) {
//     res.status(200).send(users);
//   } else {
//     res.status(404).send('no users')
//   }
// })
// app.get('/', (req, res) => {
//   res.send('Hello');
// }) ;

// app.listen(3000, () => {
//   console.log('server is running on port', 3000);
// });

// const requestListener = (req, res) => {
//   if (req.url == '/') {
//     // res.writeHead(200, { 'Hello' });
//     res.write('Hello');
//   }
// };
const createServer = () => {
  return http.createServer(function(req, res) {
    if (req.url === '/') {
      res.setHeader("Content-type", "text/plain");
      res.writeHead(200);
      res.end("Hello");
    } else if (req.url === "/api/users") {
        res.setHeader("Content-type", "text/plain");
        res.writeHead(200);
        res.end(users.toString([]));
      } else if (req.url === "/api/user") {
        res.setHeader("Content-type", "text/plain");
        res.writeHead(200);
        const user = req.users.id;
        res.end(user.id);
        } else if (req.url === "/home") {
          res.setHeader("Content-type", "text/plain");
          res.writeHead(200);
          res.end(req.url = "/index.html");
      } else {
        console.log('something went wrong')
      }
  });
};

const server = createServer();

server.listen(4000, function() {
  console.log('Server is running');
});

