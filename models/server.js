const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.usuariosPath = '/api/usuarios'
        this.middleware();
        this.routes();
    }

    middleware() {
        // CORS
        this.app.use(cors());
        
        // Lectura y parseo del body
        this.app.use(express.json());
        
        // Directorio público
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    llisten() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
