import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cron from "node-cron";
import fetch from "node-fetch";
import { mock } from "./mock.js";
import { updateInDBParser, apiDataParserToSchema } from "./parser.js";

const port = process.env.PORT || 5000;
const app = express();

// const SCHEDULE_FREQUENCY = "*/10 * * * * *";
const SCHEDULE_FREQUENCY = "*/15 * * * *"; // Run every 15 minutes

const API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=500";
const API_KEY = "2008bcdd-bd49-49e3-8ec7-2fb845a9851c";

const mongoDBURL =
  "mongodb+srv://fshaikhapple:Faizansk%40123@cluster0.p58oz.mongodb.net/coins?retryWrites=true&w=majority&appName=Cluster0";

// Schema Definition
const CoinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dateTime: { type: mongoose.Schema.Types.Mixed },
  },
  { strict: false }
);

const CoinModel = mongoose.models.Coin || mongoose.model("Coin", CoinSchema);

// MongoDB Connection
mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 220000, // Increased timeout to 2 minutes
    socketTimeoutMS: 220000, // Increased socket timeout to 2 minutes
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(
  cors({
    origin: "*",
  })
);

// Helper Function: Insert in Chunks
const insertInChunks = async (model, data, chunkSize = 20) => {
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    await model
      .insertMany(chunk, { ordered: false })
      .catch((err) => console.warn("Insertion error:", err));
  }
};

// Replace Documents in Bulk
const replaceAllDocumentsBulk = async (model, newData) => {
  try {
    await model.deleteMany({});
    await insertInChunks(model, newData);
    console.log("===ADDED NEW DATA====");

    console.log("Data updated successfully at", new Date());
  } catch (error) {
    console.error("Error replacing documents:", error);
  }
};

// Fetch API Data
const fetchAPIData = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: { "X-CMC_PRO_API_KEY": API_KEY },
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching API data:", error);
    return null;
  }
};

// Fetch All Data from DB
const getAllData = async () => CoinModel.find({}).lean();

// Cron Job
cron.schedule(SCHEDULE_FREQUENCY, async () => {
  console.log("Cron job started at", new Date());
  try {
    const apiData = await fetchAPIData();
    if (!apiData) return;

    const parsedNewData = apiDataParserToSchema(apiData);
    const parsedOldData = await getAllData();

    const dataToUpdate = parsedOldData.length
      ? updateInDBParser(parsedNewData, parsedOldData)
      : parsedNewData;

    await replaceAllDocumentsBulk(CoinModel, dataToUpdate);
  } catch (error) {
    console.error("Cron job error:", error);
  }
});

// API Route
app.get("/coins", async (req, res) => {
  try {
    const coins = await getAllData();
    res.json(coins);
  } catch (error) {
    console.error("Error retrieving coins:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving coins." });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed. Server shutting down.");
  process.exit(0);
});
