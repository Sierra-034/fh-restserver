const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Base de datos online');
    } catch(error) {
        console.error(error);
        throw new Error('Error en conexión a base de datos');
    }
};

module.exports = {
    dbConnection,
}
