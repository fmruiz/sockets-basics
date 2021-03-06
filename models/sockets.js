class Sockets {

    constructor( io ) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // ON connection
        this.io.on('connection', (socket) => {
            // Listen event
            socket.on('message-to-server', (data) => {
                console.log(data)
                this.io.emit('message-from-server', data)
            })
        });
    }

}

module.exports = Sockets;