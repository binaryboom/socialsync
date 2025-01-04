import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        if (!process.env.MongoURI) {
            throw new Error('MongoURI is missing');
        }
        await mongoose.connect(process.env.MongoURI);
        console.log('DB connected');
    } catch (e) {
        console.error(e);
    }

}

export default connectDB;