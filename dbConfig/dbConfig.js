import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });
    connection.on("error", () => {
      console.log("MongoDb connection error");
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
