import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

// DB is another continent so we use async
const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}
        /${DB_Name}`)
        console.log(`\n MongoDB Connected !! DB Host: 
        ${connectInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB Connet Error", error);
        process.exit(1);
    }
}

export default connectDB

