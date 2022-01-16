const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/SaveSYS_pro');
        console.log("Connect successfully!!")

    } catch (error) {
    console.log("Can not connect to database")
    }
}


module.exports = { connectDB }