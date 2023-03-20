const dotenv = require('dotenv');
dotenv.config();

exports.ticketSecret = process.env.ticketSecret;
exports.DB = process.env.DATABASE;
exports.email = process.env.email;
exports.pass = process.env.pass;
exports.accessKeyIdSpaces = process.env.accessKeyIdSpaces;
exports.secretAccessKeySpaces = process.env.secretAccessKeySpaces;
exports.earlybirdPrices = process.env.earlybird;
exports.regularPrices = process.env.regular;
exports.vipPrices = process.env.vip;
exports.fanPitPrices = process.env.fanPit;
