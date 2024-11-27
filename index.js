const express = require("express");
const port = 5000;
const app = express();
const mongoose = require("mongoose");
const Coin = require("./Coins");
const cors = require("cors");
const cron = require("node-cron");
const { mock } = require("./mock");
const { updateInDBParser, apiDataParserToSchema } = require("./parser");

const fiveSec = "*/10 * * * * *";
const fifteenMins = "*/15 * * * *";
const API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=500";

const CoinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Keep validation for name
    dateTime: { type: mongoose.Schema.Types.Mixed }, // Accept any structure
  },
  { strict: false } // Allows additional fields not defined in the schema
);

const CoinSch = mongoose.models.Coin || mongoose.model("Coin", CoinSchema);

const mongoDBURL =
  "mongodb+srv://fshaikhapple:Faizansk%40123@cluster0.p58oz.mongodb.net/coins?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("error", err));

mongoose.Promise = global.Promise;

app.use(
  cors({
    origin: "http://localhost:3000", // Allow only frontend origin
  })
);

async function insertInChunks(model, data, chunkSize = 20) {
  // const res = await model.insertMany(data);
  // console.log(res);
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    // console.log("chunk", chunk.length);
    await model.insertMany(chunk);
  }
}

async function replaceAllDocumentsBulk(newData) {
  try {
    await CoinSch.deleteMany({});
    await insertInChunks(CoinSch, newData); //! issue
    console.log("added in db");
  } catch (e) {
    console.log("e", e);
  } finally {
    console.log("-----> Connection Closed <-----");
  }
}

const apiFunction = async () => {
  const response = await fetch(API_URL, {
    mode: "no-cors",
    headers: {
      "X-CMC_PRO_API_KEY": "2008bcdd-bd49-49e3-8ec7-2fb845a9851c",
    },
  });
  return response.json();
};
const getAllData = async () => {
  return await CoinSch.find({}).lean();
};

cron.schedule(fifteenMins, async () => {
  try {
    console.log("----- started at -----", new Date());
    const data = await apiFunction(); // get api
    const parsedNewData = await apiDataParserToSchema(data); /// parse api data
    const parsedOldData = await getAllData(); // get old data from DB
    if (parsedOldData && parsedOldData.length > 0) {
      const toUpdateInDB = await updateInDBParser(parsedNewData, parsedOldData);
      await replaceAllDocumentsBulk(toUpdateInDB);
    } else {
      await replaceAllDocumentsBulk(parsedNewData);
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/coins", async (req, res) => {
  try {
    const coins = await getAllData(); // Fetch all records in the coins collection
    res.json(coins); // Send the records as JSON
  } catch (error) {
    console.error("Error retrieving coins:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving coins." });
  }
});

app.listen(port, (req, resp) => {
  console.log("server started on ", port);
});
