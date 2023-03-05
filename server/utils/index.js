const dotenv = require('dotenv');
dotenv.config();

exports.ticketSecret = process.env.ticketSecret;
exports.DB = process.env.DATABASE;
exports.email = process.env.email;
exports.pass = process.env.pass;
exports.accessKeyIdSpaces = process.env.accessKeyIdSpaces;
exports.secretAccessKeySpaces = process.env.secretAccessKeySpaces;
exports.earlybird = process.env.earlybird;
exports.regular = process.env.regular;
exports.vip = process.env.vip;
exports.fanPit = process.env.fanPit;
