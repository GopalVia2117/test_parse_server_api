const mongoose = require("mongoose");
const config = require("config");

const connectToDB = async() => {
    try{
        await mongoose.connect(config.get("mongoUrl"));
        console.log("MongoDB Up and Running...");

    }catch(error){
        console.log("MongoDB connection error:", error);
        // throw new Error("Failed to connect to MongoDB");
    }
}

module.exports = connectToDB;