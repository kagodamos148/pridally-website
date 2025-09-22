import mongoose from "mongoose";

export async function connect() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        if (mongoose.connections[0].readyState) {
            console.log("MongoDB is already connected");
            return;
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}
}