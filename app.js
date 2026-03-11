const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (req.url === '/api/hello') {
    res.end(JSON.stringify({ message: "Hello từ HUYNH LINH HOAI!", status: "Success" }));
  } else {
    res.end(JSON.stringify({ message: "Hello hello!!!", version: "1.0" }));
  }
});
server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
