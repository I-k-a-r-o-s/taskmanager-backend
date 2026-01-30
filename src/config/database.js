import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connection Successfull!");
  } catch (error) {
    console.log(`MongoDB Connection Failed:${error}`);
    process.exit(1);
  }
};
