import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${connected.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
