const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here.  The request is never ended.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Missing res.end() call
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});