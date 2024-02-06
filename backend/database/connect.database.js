import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_LOCAL_URL);
    console.log("Database Connected Successfully...");
  } catch (error) {
    console.log("Error Occured while connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
