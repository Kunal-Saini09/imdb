import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    if (initialized) {
        console.log("MongoDB is already initialized");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "imdb",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        initialized = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log('Mongodb error', error);
    }
}