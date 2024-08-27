const mongoose = require('mongoose');

const connectDB = async() => {
    mongoose.connect('mongodb+srv://user123:user123@cluster0.uxowo.mongodb.net/Shop?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB:', error));

};

module.exports = connectDB;
