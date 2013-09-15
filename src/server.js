﻿var DEFAULT_PORT = 5000;
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world! [helloworld sample]');
}).listen(DEFAULT_PORT);