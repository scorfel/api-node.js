const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`, { dbName: process.env.DB_NAME });
        console.log('Connexion à MongoDB réussie !')
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { connectDb }