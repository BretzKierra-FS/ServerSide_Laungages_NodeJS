const http = require('http');
const app = require('./app');
require('dotenv').config();

http.createServer(app).listen(process.env.port, () => {
  console.log(`The server is running on ${process.env.port} `);
});
