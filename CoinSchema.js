// const mongoose = require('mongoose');

// // Schema for the innermost data
// const nestedDataSchema = new mongoose.Schema(
//   {
//     last_updated: {
//       type: Date,
//       required: true,
//     },
//     market_cap: {
//       type: Number,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     volume_24h: {
//       type: Number,
//       required: true,
//     },
//     cmc_rank: {
//       type: Number,
//       required: true,
//     },
//   },
//   { _id: false } // Disable automatic _id creation for this schema
// );

// // Schema for the dynamic date-time mapping
// const coinSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     symbol: {
//       type: String,
//       required: true,
//     },
//     dateTime: {
//       type: Map,
//       of: new mongoose.Schema(
//         {
//           type: Map,
//           of: nestedDataSchema, // Nested schema for timestamped data
//         },
//         { _id: false } // Disable automatic _id creation for this schema
//       ),
//     },
//   },
//   {
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// module.exports = mongoose.model('Coin', coinSchema);
