import mongoose from "mongoose";

const dbConnect = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Mongoose Database connection successful");
    })
    .catch((err) => {
      console.log("Mongoose Database connection error", err);
    });

export default dbConnect;
