const http = require("http");

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    repsonse.end("Hello World\n");
});

server.listen(process.env.PORT);
