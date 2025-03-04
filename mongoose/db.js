const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      process.env.MONGO_URI ?? "mongodb://localhost:27017/catDB"
    );

    console.log("✅ Successfully connected to MongoDB");

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB Disconnected! Reconnecting...");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB Connection Error:", err);
    });
  } catch (error) {
    console.log("❌ Database connection failed!", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
