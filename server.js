const http = require('http');

// create http server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello. Node.js HTTP Server!</h1>');
    res.end();
});

const port = 3000;

//Start the server
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});