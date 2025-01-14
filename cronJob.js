import mongoose from "mongoose";
import express from "express";

const app = express();
// const SCHEDULE_FREQUENCY = "*/10 * * * * *"; //Run every 10 sec
// const SCHEDULE_FREQUENCY = "*/15 * * * *"; // Run every 15 minutes
const API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH,LTC,BNB,NEO,QTUM,EOS,SNT,BNT,BCC,GAS,BTC,HSR,OAX,DNT,MCO,ICN,WTC,LRC,YOYO,OMG,ZRX,STRAT,SNGLS,BQX,KNC,FUN,SNM,IOTA,LINK,XVG,SALT,MDA,MTL,SUB,ETC,MTH,ENG,ZEC,AST,DASH,BTG,EVX,REQ,VIB,TRX,POWR,ARK,XRP,MOD,ENJ,STORJ,VEN,KMD,NULS,RCN,RDN,XMR,DLT,AMB,BAT,BCPT,ARN,GVT,CDT,GXS,POE,QSP,BTS,XZC,LSK,TNT,FUEL,MANA,BCD,DGD,ADX,ADA,PPT,CMT,XLM,CND,LEND,WABI,TNB,WAVES,GTO,ICX,OST,ELF,AION,NEBL,BRD,EDO,WINGS,NAV,LUN,TRIG,APPC,VIBE,RLC,INS,PIVX,IOST,CHAT,STEEM,NANO,VIA,BLZ,AE,RPX,NCASH,POA,ZIL,ONT,STORM,XEM,WAN,WPR,QLC,SYS,GRS,CLOAK,GNT,LOOM,BCN,REP,TUSD,ZEN,SKY,CVC,THETA,IOTX,QKC,AGI,NXS,DATA,SC,NPXS,KEY,NAS,MFT,DENT,ARDR,HOT,VET,DOCK,POLY,PHX,HC,GO,PAX,RVN,DCR,USDC,MITH,BCHABC,BCHSV,REN,BTT,USDS,ONG,FET,CELR,MATIC,ATOM,PHB,TFUEL,ONE,FTM,BTCB,ALGO,USDSB,ERD,DOGE,DUSK,BGBP,ANKR,WIN,COS,TUSDB,COCOS,TOMO,PERL,CHZ,BAND,BUSD,BEAM,XTZ,HBAR,NKN,STX,KAVA,ARPA,CTXC,BCH,TROY,VITE,FTT,USDT,EUR,OGN,DREP,BULL,BEAR,ETHBULL,ETHBEAR,TCT,WRX,LTO,EOSBULL,EOSBEAR,XRPBULL,XRPBEAR,MBL,COTI,BNBBULL,BNBBEAR,STPT,SOL,CTSI,HIVE,CHR,BTCUP,BTCDOWN,MDT,STMX,IQ,PNT,GBP,DGB,COMP,BKRW,SXP,SNX,ETHUP,ETHDOWN,ADAUP,ADADOWN,LINKUP,LINKDOWN,VTHO,IRIS,MKR,DAI,RUNE,AUD,FIO,BNBUP,BNBDOWN,XTZUP,XTZDOWN,AVA,BAL,YFI,JST,SRM,ANT,CRV,SAND,OCEAN,NMR,DOT,LUNA,IDEX,RSR,PAXG,WNXM,TRB,BZRX,WBTC,SUSHI,YFII,KSM,EGLD,DIA,UMA,EOSUP,EOSDOWN,TRXUP,TRXDOWN,XRPUP,XRPDOWN,DOTUP,DOTDOWN,BEL,WING,SWRV,LTCUP,LTCDOWN,CREAM,UNI,NBS,OXT,SUN,AVAX,HNT,BAKE,BURGER,FLM,SCRT,CAKE,SPARTA,UNIUP,UNIDOWN,ORN,UTK,XVS,ALPHA,VIDT,AAVE,NEAR,SXPUP,SXPDOWN,FIL,FILUP,FILDOWN,YFIUP,YFIDOWN,INJ,AERGO,EASY,AUDIO,CTK,BCHUP,BCHDOWN,BOT,AKRO,KP3R,AXS,HARD,RENBTC,SLP,CVP,STRAX,FOR,UNFI,FRONT,BCHA,ROSE,HEGIC,AAVEUP,AAVEDOWN,PROM,SKL,SUSD,COVER,GLM,GHST,SUSHIUP,SUSHIDOWN,XLMUP,XLMDOWN,DF,GRT,JUV,PSG,1INCH,REEF,OG,ATM,ASR,CELO,RIF,BTCST,TRU,DEXE,CKB,TWT,FIRO,BETH,PROS,LIT,SFP,FXS,DODO,UFT,ACM,AUCTION,PHA,TVK,BADGER,FIS,OM,POND,DEGO,ALICE,BIFI,LINA,PERP,RAMP,SUPER,CFX,EPS,AUTO,TKO,PUNDIX,TLM,1INCHUP,1INCHDOWN,MIR,BAR,FORTH,EZ,SHIB,ICP,AR,POLS,MDX,MASK,LPT,AGIX,NU,ATA,GTC,TORN,KEEP,ERN,KLAY,BOND,MLN,QUICK,C98,CLV,QNT,FLOW,XEC,MINA,RAY,FARM,ALPACA,MBOX,VGX,WAXP,TRIBE,GNO,DYDX,USDP,GALA,ILV,YGG,FIDA,AGLD,RAD,BETA,RARE,SSV,LAZIO,CHESS,DAR,BNX,RGT,MOVR,CITY,ENS,QI,PORTO,JASMY,AMP,PLA,PYR,RNDR,ALCX,SANTOS,MC,ANY,BICO,FLUX,VOXEL,HIGH,CVX,PEOPLE,OOKI,SPELL,UST,JOE,ACH,IMX,GLMR,LOKA,API3,BTTC,ACA,ANC,BDOT,XNO,WOO,ALPINE,T,ASTR,GMT,KDA,APE,BSW,MULTI,MOB,NEXO,REI,GAL,LDO,EPX,LUNC,USTC,OP,LEVER,STG,GMX,POLYX,APT,OSMO,HFT,HOOK,MAGIC,HIFI,RPL,GFT,GNS,SYN,LQTY,ID,ARB,RDNT,EDU,SUI,PEPE,FLOKI,WBETH,COMBO,MAV,PENDLE,ARKM,WLD,FDUSD,SEI,CYBER,NTRN,TIA,MEME,ORDI,BEAMX,VIC,BLUR,VANRY,AEUR,JTO,1000SATS,BONK,ACE,NFP,AI,XAI,MANTA,ALT,JUP,PYTH,RONIN,DYM,PIXEL,STRK,PORTAL,PDA,AXL,WIF,METIS,AEVO,BOME,ETHFI,ENA,W,TNSR,SAGA,TAO,OMNI,REZ,BB,NOT,IO,ZK,LISTA,ZRO,G,BANANA,RENDER,TON,DOGS,EURI,SLF,POL,NEIRO,TURBO,1MBABYDOGE,CATI,HMSTR,EIGEN,BNSOL,SCR,LUMIA,KAIA,COW,CETUS,PNUT,ACT";
const API_KEY = "9d2cb7ed-ffbf-49fa-9ce3-ec705f240363";

// const fetchAPIData = async () => {
//   try {
//     const response = await fetch(API_URL, {
//       headers: { "X-CMC_PRO_API_KEY": API_KEY },
//     });
//     if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching API data:", error);
//     return null;
//   }
// };


const uri =
"mongodb+srv://fshaikhapple:Faizansk%40123@cluster0.p58oz.mongodb.net/coinCap?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI

await mongoose.connect(uri);
console.log('db connected')
const CoinModel = mongoose.connection.collection('dashboard');

app.get("/get-coins", async (req, res) => {

  try {
    const data = await CoinModel.find({}).toArray();
    console.log(data.length);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(5000, () => console.log('server up'));

// export const apiDataParserToSchema = (apiData) => {
//   let parsedData = [];
//   Object.keys(apiData.data).forEach((cryptoSymbol) => {
//     const item = apiData.data[cryptoSymbol];
//     const cryptoData = {
//       last_updated: new Date(item.quote.USD.last_updated),
//       data: {
//         cmc_rank: item.cmc_rank,
//         market_cap: item.quote.USD.market_cap,
//         name: item.name,
//         price: item.quote.USD.price,
//         symbol: cryptoSymbol,
//         volume_24h: item.quote.USD.volume_24h,
//       },
//     };
//     parsedData.push(cryptoData);
//   });
//   return parsedData;
// };

// cron.schedule(SCHEDULE_FREQUENCY, async () => {
//   try {
//     console.log("STARTED cron started at", new Date());
//     const apiData = await fetchAPIData();
//     if (!apiData) return;
//     const parsedNewData = apiDataParserToSchema(apiData);
//     await CoinModel.insertMany(parsedNewData);
//     console.log("--- Added in db ----");
//   } catch (error) {
//     console.error("Cron job error:", error);
//   } finally {
//     console.log("ENDED cron at", new Date());
//   }
// });