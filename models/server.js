    const express = require('express');

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        // Directorio público
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World');
        });
    }

    llisten() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
