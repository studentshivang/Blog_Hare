const mongoose = require("mongoose")


const DB=process.env.MONGODB_URL;
const databaseconnection =async()=>{
    try {
        await mongoose.connect(DB);
        console.log(`Connected to atlas DataBase successfully...`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = databaseconnection;