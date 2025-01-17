const binanceList = [
  "ETH",
  "LTC",
  "BNB",
  "NEO",
  "QTUM",
  "EOS",
  "SNT",
  "BNT",
  "BCC",
  "GAS",
  "BTC",
  "HSR",
  "OAX",
  "DNT",
  "MCO",
  "ICN",
  "WTC",
  "LRC",
  "YOYO",
  "OMG",
  "ZRX",
  "STRAT",
  "SNGLS",
  "BQX",
  "KNC",
  "FUN",
  "SNM",
  "IOTA",
  "LINK",
  "XVG",
  "SALT",
  "MDA",
  "MTL",
  "SUB",
  "ETC",
  "MTH",
  "ENG",
  "ZEC",
  "AST",
  "DASH",
  "BTG",
  "EVX",
  "REQ",
  "VIB",
  "TRX",
  "POWR",
  "ARK",
  "XRP",
  "MOD",
  "ENJ",
  "STORJ",
  "VEN",
  "KMD",
  "NULS",
  "RCN",
  "RDN",
  "XMR",
  "DLT",
  "AMB",
  "BAT",
  "BCPT",
  "ARN",
  "GVT",
  "CDT",
  "GXS",
  "POE",
  "QSP",
  "BTS",
  "XZC",
  "LSK",
  "TNT",
  "FUEL",
  "MANA",
  "BCD",
  "DGD",
  "ADX",
  "ADA",
  "PPT",
  "CMT",
  "XLM",
  "CND",
  "LEND",
  "WABI",
  "TNB",
  "WAVES",
  "GTO",
  "ICX",
  "OST",
  "ELF",
  "AION",
  "NEBL",
  "BRD",
  "EDO",
  "WINGS",
  "NAV",
  "LUN",
  "TRIG",
  "APPC",
  "VIBE",
  "RLC",
  "INS",
  "PIVX",
  "IOST",
  "CHAT",
  "STEEM",
  "NANO",
  "VIA",
  "BLZ",
  "AE",
  "RPX",
  "NCASH",
  "POA",
  "ZIL",
  "ONT",
  "STORM",
  "XEM",
  "WAN",
  "WPR",
  "QLC",
  "SYS",
  "GRS",
  "CLOAK",
  "GNT",
  "LOOM",
  "BCN",
  "REP",
  "TUSD",
  "ZEN",
  "SKY",
  "CVC",
  "THETA",
  "IOTX",
  "QKC",
  "AGI",
  "NXS",
  "DATA",
  "SC",
  "NPXS",
  "KEY",
  "NAS",
  "MFT",
  "DENT",
  "ARDR",
  "HOT",
  "VET",
  "DOCK",
  "POLY",
  "PHX",
  "HC",
  "GO",
  "PAX",
  "RVN",
  "DCR",
  "USDC",
  "MITH",
  "BCHABC",
  "BCHSV",
  "REN",
  "BTT",
  "USDS",
  "ONG",
  "FET",
  "CELR",
  "MATIC",
  "ATOM",
  "PHB",
  "TFUEL",
  "ONE",
  "FTM",
  "BTCB",
  "ALGO",
  "USDSB",
  "ERD",
  "DOGE",
  "DUSK",
  "BGBP",
  "ANKR",
  "WIN",
  "COS",
  "TUSDB",
  "COCOS",
  "TOMO",
  "PERL",
  "CHZ",
  "BAND",
  "BUSD",
  "BEAM",
  "XTZ",
  "HBAR",
  "NKN",
  "STX",
  "KAVA",
  "ARPA",
  "CTXC",
  "BCH",
  "TROY",
  "VITE",
  "FTT",
  "USDT",
  "EUR",
  "OGN",
  "DREP",
  "BULL",
  "BEAR",
  "ETHBULL",
  "ETHBEAR",
  "TCT",
  "WRX",
  "LTO",
  "EOSBULL",
  "EOSBEAR",
  "XRPBULL",
  "XRPBEAR",
  "MBL",
  "COTI",
  "BNBBULL",
  "BNBBEAR",
  "STPT",
  "SOL",
  "CTSI",
  "HIVE",
  "CHR",
  "BTCUP",
  "BTCDOWN",
  "MDT",
  "STMX",
  "IQ",
  "PNT",
  "GBP",
  "DGB",
  "COMP",
  "BKRW",
  "SXP",
  "SNX",
  "ETHUP",
  "ETHDOWN",
  "ADAUP",
  "ADADOWN",
  "LINKUP",
  "LINKDOWN",
  "VTHO",
  "IRIS",
  "MKR",
  "DAI",
  "RUNE",
  "AUD",
  "FIO",
  "BNBUP",
  "BNBDOWN",
  "XTZUP",
  "XTZDOWN",
  "AVA",
  "BAL",
  "YFI",
  "JST",
  "SRM",
  "ANT",
  "CRV",
  "SAND",
  "OCEAN",
  "NMR",
  "DOT",
  "LUNA",
  "IDEX",
  "RSR",
  "PAXG",
  "WNXM",
  "TRB",
  "BZRX",
  "WBTC",
  "SUSHI",
  "YFII",
  "KSM",
  "EGLD",
  "DIA",
  "UMA",
  "EOSUP",
  "EOSDOWN",
  "TRXUP",
  "TRXDOWN",
  "XRPUP",
  "XRPDOWN",
  "DOTUP",
  "DOTDOWN",
  "BEL",
  "WING",
  "SWRV",
  "LTCUP",
  "LTCDOWN",
  "CREAM",
  "UNI",
  "NBS",
  "OXT",
  "SUN",
  "AVAX",
  "HNT",
  "BAKE",
  "BURGER",
  "FLM",
  "SCRT",
  "CAKE",
  "SPARTA",
  "UNIUP",
  "UNIDOWN",
  "ORN",
  "UTK",
  "XVS",
  "ALPHA",
  "VIDT",
  "AAVE",
  "NEAR",
  "SXPUP",
  "SXPDOWN",
  "FIL",
  "FILUP",
  "FILDOWN",
  "YFIUP",
  "YFIDOWN",
  "INJ",
  "AERGO",
  "EASY",
  "AUDIO",
  "CTK",
  "BCHUP",
  "BCHDOWN",
  "BOT",
  "AKRO",
  "KP3R",
  "AXS",
  "HARD",
  "RENBTC",
  "SLP",
  "CVP",
  "STRAX",
  "FOR",
  "UNFI",
  "FRONT",
  "BCHA",
  "ROSE",
  "HEGIC",
  "AAVEUP",
  "AAVEDOWN",
  "PROM",
  "SKL",
  "SUSD",
  "COVER",
  "GLM",
  "GHST",
  "SUSHIUP",
  "SUSHIDOWN",
  "XLMUP",
  "XLMDOWN",
  "DF",
  "GRT",
  "JUV",
  "PSG",
  "1INCH",
  "REEF",
  "OG",
  "ATM",
  "ASR",
  "CELO",
  "RIF",
  "BTCST",
  "TRU",
  "DEXE",
  "CKB",
  "TWT",
  "FIRO",
  "BETH",
  "PROS",
  "LIT",
  "SFP",
  "FXS",
  "DODO",
  "UFT",
  "ACM",
  "AUCTION",
  "PHA",
  "TVK",
  "BADGER",
  "FIS",
  "OM",
  "POND",
  "DEGO",
  "ALICE",
  "BIFI",
  "LINA",
  "PERP",
  "RAMP",
  "SUPER",
  "CFX",
  "EPS",
  "AUTO",
  "TKO",
  "PUNDIX",
  "TLM",
  "1INCHUP",
  "1INCHDOWN",
  "MIR",
  "BAR",
  "FORTH",
  "EZ",
  "SHIB",
  "ICP",
  "AR",
  "POLS",
  "MDX",
  "MASK",
  "LPT",
  "AGIX",
  "NU",
  "ATA",
  "GTC",
  "TORN",
  "KEEP",
  "ERN",
  "KLAY",
  "BOND",
  "MLN",
  "QUICK",
  "C98",
  "CLV",
  "QNT",
  "FLOW",
  "XEC",
  "MINA",
  "RAY",
  "FARM",
  "ALPACA",
  "MBOX",
  "VGX",
  "WAXP",
  "TRIBE",
  "GNO",
  "DYDX",
  "USDP",
  "GALA",
  "ILV",
  "YGG",
  "FIDA",
  "AGLD",
  "RAD",
  "BETA",
  "RARE",
  "SSV",
  "LAZIO",
  "CHESS",
  "DAR",
  "BNX",
  "RGT",
  "MOVR",
  "CITY",
  "ENS",
  "QI",
  "PORTO",
  "JASMY",
  "AMP",
  "PLA",
  "PYR",
  "RNDR",
  "ALCX",
  "SANTOS",
  "MC",
  "ANY",
  "BICO",
  "FLUX",
  "VOXEL",
  "HIGH",
  "CVX",
  "PEOPLE",
  "OOKI",
  "SPELL",
  "UST",
  "JOE",
  "ACH",
  "IMX",
  "GLMR",
  "LOKA",
  "API3",
  "BTTC",
  "ACA",
  "ANC",
  "BDOT",
  "XNO",
  "WOO",
  "ALPINE",
  "T",
  "ASTR",
  "GMT",
  "KDA",
  "APE",
  "BSW",
  "MULTI",
  "MOB",
  "NEXO",
  "REI",
  "GAL",
  "LDO",
  "EPX",
  "LUNC",
  "USTC",
  "OP",
  "LEVER",
  "STG",
  "GMX",
  "POLYX",
  "APT",
  "OSMO",
  "HFT",
  "HOOK",
  "MAGIC",
  "HIFI",
  "RPL",
  "GFT",
  "GNS",
  "SYN",
  "LQTY",
  "ID",
  "ARB",
  "RDNT",
  "EDU",
  "SUI",
  "PEPE",
  "FLOKI",
  "WBETH",
  "COMBO",
  "MAV",
  "PENDLE",
  "ARKM",
  "WLD",
  "FDUSD",
  "SEI",
  "CYBER",
  "NTRN",
  "TIA",
  "MEME",
  "ORDI",
  "BEAMX",
  "VIC",
  "BLUR",
  "VANRY",
  "AEUR",
  "JTO",
  "1000SATS",
  "BONK",
  "ACE",
  "NFP",
  "AI",
  "XAI",
  "MANTA",
  "ALT",
  "JUP",
  "PYTH",
  "RONIN",
  "DYM",
  "PIXEL",
  "STRK",
  "PORTAL",
  "PDA",
  "AXL",
  "WIF",
  "METIS",
  "AEVO",
  "BOME",
  "ETHFI",
  "ENA",
  "W",
  "TNSR",
  "SAGA",
  "TAO",
  "OMNI",
  "REZ",
  "BB",
  "NOT",
  "IO",
  "ZK",
  "LISTA",
  "ZRO",
  "G",
  "BANANA",
  "RENDER",
  "TON",
  "DOGS",
  "EURI",
  "SLF",
  "POL",
  "NEIRO",
  "TURBO",
  "1MBABYDOGE",
  "CATI",
  "HMSTR",
  "EIGEN",
  "BNSOL",
  "SCR",
  "LUMIA",
  "KAIA",
  "COW",
  "CETUS",
  "PNUT",
  "ACT",
];
// export const parser = (apiData = {}) => {
//   const { status, data } = apiData;

//   if (data && data.length > 0) {
//     const dateString = status.timestamp;
//     const date = new Date(dateString);

//     const formattedDateTime = `${String(date.getDate()).padStart(
//       2,
//       "0"
//     )}-${String(date.getMonth() + 1).padStart(
//       2,
//       "0"
//     )}-${date.getFullYear()}_${String(date.getUTCHours()).padStart(
//       2,
//       "0"
//     )}-${String(date.getUTCMinutes()).padStart(2, "0")}-${String(
//       date.getUTCSeconds()
//     ).padStart(2, "0")}`;
//     const dateFormatted = formattedDateTime.split("_")[0];
//     const parsedData = data?.map((item, id) => {
//       return {
//         name: item.name,
//         dateTime: {
//           [dateFormatted]: {
//             [formattedDateTime]: {
//               last_updated: item.last_updated,
//               market_cap: item.quote.USD.market_cap,
//               price: item.quote.USD.price,
//               volume_24h: item.quote.USD?.volume_24h,
//             },
//           },
//         },
//       };
//     });
//     return parsedData;
//   }
// };

// export const getDateAndTimeCustom = (dateString) => {
//   const year = dateString.substr(0, 4);
//   const month = dateString.substr(5, 2);
//   const day = dateString.substr(8, 2);
//   const hour = dateString.substr(11, 2);
//   const min = dateString.substr(14, 2);
//   const sec = dateString.substr(20, 2);
//   const formattedDateTime = `${day}-${month}-${year}_${hour}-${min}-${sec}`;
//   return formattedDateTime; //  11-11-2024_11-55-00
// };

// export const getDate = (dateString) => {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
//   const year = date.getFullYear();
//   const formattedDate = `${day}-${month}-${year}`;
//   return formattedDate;
// };

// //! this converts the api data into acceptable data for updateInDBParser()
// export const apiDataParserToSchema = (apiData) => {
//   const newData = apiData?.data?.map((item) => {
//     const formattedDate = getDate(item.last_updated);
//     const last_updated = getDateAndTimeCustom(item.last_updated);
//     if (binanceList.includes(item.symbol))
//       return {
//         name: item.name,
//         symbol: item.symbol,
//         dateTime: {
//           [formattedDate]: {
//             [last_updated]: {
//               last_updated: item.last_updated,
//               market_cap: item.quote.USD.market_cap,
//               price: item.quote.USD.price,
//               volume_24h: item.quote.USD?.volume_24h,
//               cmc_rank: item.cmc_rank,
//             },
//           },
//         },
//       };
//   });
//   return newData.filter((item) => item);
// };

// //! this accepts the parsed data and appends as one
// export const updateInDBParser = (newData, dataBaseOldData) => {
//   const unionDataWithOutIntersection = newData.filter((newItem) => {
//     let found = 0;
//     dataBaseOldData?.map((oldItem) => {
//       if (oldItem.name === newItem.name) {
//         found = 1;
//         return newItem;
//       }
//     });
//     if (found === 0) {
//       return true;
//     }
//   });
//   const unionItems = [...dataBaseOldData, ...unionDataWithOutIntersection]; // all of old + unique of

//   //   now find the intersection
//   const dataIntersectionNew = newData.filter((newItem) => {
//     let found = 0;

//     dataBaseOldData?.map((oldItem) => {
//       if (oldItem.name === newItem.name) {
//         found = 1;
//         return newItem;
//       }
//     });
//     if (found === 1) {
//       return true;
//     }
//   });

//   // this will update the inner values

//   let updatedItemArrayOverLap = []; // stroe all updated value in this array
//   let updatedItemNotOverlapArray = []; // stroe all updated value in this array
//   const updatedData = unionItems?.map((itemUni) => {
//     let coinFound = 0;
//     let mergeObj = itemUni;
//     dataIntersectionNew?.map((itemInter) => {
//       let updatedItem = "";
//       if (itemUni.name === itemInter.name) {
//         coinFound = 1;
//         const timeStrampToAppendNewItem =
//           itemInter.dateTime[Object.keys(itemInter.dateTime)[0]];
//         const dateOfNewItem = Object.keys(itemInter.dateTime)[0];
//         const dateFound = itemUni.dateTime[dateOfNewItem];

//         if (dateFound) {
//           updatedItem = {
//             ...itemUni,
//             dateTime: {
//               ...itemUni.dateTime,
//               [dateOfNewItem]: {
//                 ...itemUni.dateTime[dateOfNewItem],
//                 ...timeStrampToAppendNewItem,
//               },
//             },
//           };
//         } else {
//           updatedItem = {
//             ...itemUni,
//             dateTime: {
//               ...itemUni.dateTime,
//               [dateOfNewItem]: { ...timeStrampToAppendNewItem },
//             },
//           };
//         }
//         if (updatedItem) {
//           updatedItemArrayOverLap.push(updatedItem);
//         }
//       }
//     });
//     if (coinFound === 0) {
//       updatedItemNotOverlapArray.push(itemUni);
//     }
//   });

//   return [...updatedItemArrayOverLap, ...updatedItemNotOverlapArray];
// };

export const parser = (apiData = {}) => {
  const { status, data } = apiData;

  if (data && data.length > 0) {
    const dateString = status.timestamp;
    const date = new Date(dateString);

    const formattedDateTime = `${String(date.getDate()).padStart(
      2,
      "0"
    )}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${date.getFullYear()}_${String(date.getUTCHours()).padStart(
      2,
      "0"
    )}-${String(date.getUTCMinutes()).padStart(2, "0")}-${String(
      date.getUTCSeconds()
    ).padStart(2, "0")}`;
    const dateFormatted = formattedDateTime.split("_")[0];
    const parsedData = data?.map((item, id) => {
      return {
        name: item.name,
        dateTime: {
          [dateFormatted]: {
            [formattedDateTime]: {
              last_updated: item.last_updated,
              market_cap: item.quote.USD.market_cap,
              price: item.quote.USD.price,
              volume_24h: item.quote.USD?.volume_24h,
            },
          },
        },
      };
    });
    return parsedData;
  }
};

export const getDateAndTimeCustom = (dateString) => {
  const year = dateString.substr(0, 4);
  const month = dateString.substr(5, 2);
  const day = dateString.substr(8, 2);
  const hour = dateString.substr(11, 2);
  const min = dateString.substr(14, 2);
  const sec = dateString.substr(20, 2);
  const formattedDateTime = `${day}-${month}-${year}_${hour}-${min}-${sec}`;
  return formattedDateTime; //  11-11-2024_11-55-00
};

export const getDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

//! this converts the api data into acceptable data for updateInDBParser()
export const apiDataParserToSchema = (apiData) => {
  let parsedData = [];
  Object.keys(apiData.data).forEach((cryptoSymbol) => {
    const item = apiData.data[cryptoSymbol];
    const cryptoData = {
      last_updated: new Date(item.quote.USD.last_updated),
      data: {
        cmc_rank: item.cmc_rank,
        market_cap: item.quote.USD.market_cap,
        name: item.name,
        price: item.quote.USD.price,
        symbol: cryptoSymbol,
        volume_24h: item.quote.USD.volume_24h,
      },
    };
    parsedData.push(cryptoData);
  });
  return parsedData;
  // const newData = apiData?.data?.map((item) => {
  //   // const formattedDate = getDate(item.last_updated);
  //   // const last_updated = getDateAndTimeCustom(item.last_updated);
  //   if (binanceList.includes(item.symbol))
  //     return {
  //       last_updated: new Date(item.last_updated),
  //       data: {
  //         name: item.name,
  //         symbol: item.symbol,
  //         market_cap: item.quote.USD.market_cap,
  //         price: item.quote.USD.price,
  //         volume_24h: item.quote.USD?.volume_24h,
  //         cmc_rank: item.cmc_rank,
  //       },
  //       // dateTime: {
  //       //   [formattedDate]: {
  //       //     [last_updated]: {
  //       //       last_updated: item.last_updated,
  //       //       market_cap: item.quote.USD.market_cap,
  //       //       price: item.quote.USD.price,
  //       //       volume_24h: item.quote.USD?.volume_24h,
  //       //       cmc_rank: item.cmc_rank,
  //       //     },
  //       //   },
  //       // },
  //     };
  // });
  // // console.log("newData.filter", newData);

  return newData.filter((item) => !!item);
};

//! this function eleminates other entries of data and gives 7 days data only
function limitDateTimeEntries(obj, maxEntries) {
  const dateTimeKeys = Object.keys(obj.dateTime); // Get all keys of the dateTime object
  console.log("dateTimeKeys", dateTimeKeys);

  // const limitedKeys = dateTimeKeys.slice(0, maxEntries); // Retain only the first `maxEntries` keys
  const limitedKeys = dateTimeKeys; // Retain only the first `maxEntries` keys
  const limitedDateTime = limitedKeys.reduce((acc, key) => {
    acc[key] = obj.dateTime[key]; // Add only the allowed keys to the new object
    return acc;
  }, {});

  return {
    ...obj,
    dateTime: limitedDateTime, // Replace the dateTime object with the limited version
  };
}

//! this accepts the parsed data and appends as one
export const updateInDBParser = (newData, dataBaseOldData) => {
  const unionDataWithOutIntersection = newData.filter((newItem) => {
    let found = 0;
    dataBaseOldData?.map((oldItem) => {
      if (oldItem.name === newItem.name) {
        found = 1;
        return newItem;
      }
    });
    if (found === 0) {
      return true;
    }
  });
  const unionItems = [...dataBaseOldData, ...unionDataWithOutIntersection]; // all of old + unique of

  //   now find the intersection
  const dataIntersectionNew = newData.filter((newItem) => {
    let found = 0;

    dataBaseOldData?.map((oldItem) => {
      if (oldItem.name === newItem.name) {
        found = 1;
        return newItem;
      }
    });
    if (found === 1) {
      return true;
    }
  });

  // this will update the inner values

  let updatedItemArrayOverLap = []; // stroe all updated value in this array
  let updatedItemNotOverlapArray = []; // stroe all updated value in this array
  const updatedData = unionItems?.map((itemUni) => {
    let coinFound = 0;
    let mergeObj = itemUni;

    dataIntersectionNew?.map((itemInter) => {
      let updatedItem = "";
      if (itemUni.name === itemInter.name) {
        coinFound = 1;
        const timeStrampToAppendNewItem =
          itemInter.dateTime[Object.keys(itemInter.dateTime)[0]];
        const dateOfNewItem = Object.keys(itemInter.dateTime)[0];

        const dateFound = itemUni.dateTime[dateOfNewItem];
        if (dateFound) {
          updatedItem = {
            ...itemUni,
            dateTime: {
              ...itemUni.dateTime,
              [dateOfNewItem]: {
                ...itemUni.dateTime[dateOfNewItem],
                ...timeStrampToAppendNewItem,
              },
            },
          };
        } else {
          updatedItem = {
            ...itemUni,
            dateTime: {
              ...itemUni.dateTime,
              [dateOfNewItem]: { ...timeStrampToAppendNewItem },
            },
          };
        }
        if (updatedItem) {
          updatedItemArrayOverLap.push(updatedItem);
        }
      }
    });
    if (coinFound === 0) {
      updatedItemNotOverlapArray.push(itemUni);
    }
  });
  const mergedArray = [
    ...updatedItemArrayOverLap,
    ...updatedItemNotOverlapArray,
  ];

  const filteredMergedArray = mergedArray.map((item) => {
    const data = limitDateTimeEntries(item, 7);
    return data;
  });

  return filteredMergedArray;
};
