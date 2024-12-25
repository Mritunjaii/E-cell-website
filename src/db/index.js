import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const dbConnect= async ()=>{
    try {
        const ctInitialize=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("Database connected");
    } catch (error) {
        console.log("DB/index.js err:\n",error)
        process.exit(1);
    }
}

export default dbConnect;