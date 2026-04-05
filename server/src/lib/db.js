import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED : ", conn.connection.host);
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR", error);
    process.exit(1); // 1 means exit with failure, 0 means exit with success
  }
};
