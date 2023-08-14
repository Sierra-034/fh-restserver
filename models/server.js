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
            res.json({
                msg: 'get API',
            });
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API',
            });
        });

        this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post API',
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API',
            });
        });

        this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch API',
            });
        });
    }

    llisten() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
