import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    if (initialized) {
        console.log("MongoDB is already initialized");
        return;
    }

    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error('MONGODB_URI is not defined in environment variables. Please add it to .env.local');
    }

    try {
        await mongoose.connect(mongoUri, {
            dbName: "kunal",
        });
        initialized = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log('MongoDB connection error:', error);
        throw error;
    }
}