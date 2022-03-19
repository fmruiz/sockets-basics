const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {

    socket.on('message-to-server', (data) => {
        io.emit('message-from-server', data)
    })

});

server.listen(8080, () => {
    console.log(`Server ON in port 8080`)
});