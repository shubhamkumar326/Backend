import mongoose from "mongoose";
// import { DB_NAME } from "./constant.js";
import { DB_NAME } from "./constant.js";
const connectDB = async () => {
    try{
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Connected to MongoDB host:${connection.connection.host}`);
    } catch (error) {
        console.error("mongodb error", error);
        process.exit(1);
    }
}
export default connectDB;