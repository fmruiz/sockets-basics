const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor () {
        this.app = express()
        this.port = 8080;

        // http server
        this.server = http.createServer(this.app);

        // sockets config
        this.io = socketio(this.server, { /* configs */})
    }

    middlewares() {
        // deploy public folder
        this.app.use(express.static(path.resolve(__dirname, '../public') ) )
    }

    socketsConfigs() {
        new Sockets(this.io);
    }

    execute() {

        // init middlewares
        this.middlewares();

        // init socket configs
        this.socketsConfigs();

        // init server
        this.server.listen(this.port, () => {
            console.log(`Server ON in port 8080`)
        });
    }
}

module.exports = Server;