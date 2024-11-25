// app.get("/api/crypto", async (req, res) => {
//   try {
//     console.log("will call api ");

//     const response = await fetch(
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=400",
//       {
//         mode: "no-cors",
//         headers: {
//           "X-CMC_PRO_API_KEY": "2008bcdd-bd49-49e3-8ec7-2fb845a9851c",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log("data got ");
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// app.post("/coins-update", async (req, res) => {
//   try {
//     // const Coins = mongoose.model('Coins')
//     // // Coins.find({}).then((coins)=>{res.})
//     // const coin = new Coin(req.body);
//     // await coin.save();
//     // res.status(201).send(coin);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// fshaikhapple@gmail.com
// eX4MM0dqeCT0p0Ue
// faizeeblackberry
// mongodb+srv://faizeeblackberry:eX4MM0dqeCT0p0Ue@cluster0.rbh9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// 0VmpjFJuSXlHmmhV

// Faizansk@123

// "mongodb+srv://faizeeblackberry:eX4MM0dqeCT0p0Ue@cluster0.rbh9a.mongodb.net/coins?retryWrites=true&w=majority&appName=Cluster0",
