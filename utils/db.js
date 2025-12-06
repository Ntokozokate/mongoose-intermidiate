import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export const connectMongoBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDb connection failed", error);
    process.exit(1);
  }
};
