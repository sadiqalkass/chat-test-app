import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to mongodb")
    } catch (error) {
        console.log("Error connecting to mogodb " + error )
    }
}

export default connectToMongodb