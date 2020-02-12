var app = require('express')(),
    server = require('http').createServer(app);

server.listen(3000,'localhost', function() {
    console.log('ready to go!');
});
