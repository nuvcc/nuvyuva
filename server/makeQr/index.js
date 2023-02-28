const QRCode = require('QRCode');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();
const ticketSecret = process.env.ticketSecret;

const { createCanvas } = require('canvas');
const canvas = createCanvas(4096, 1379);

const makeQROnFly = async (uid) => {
  console.log(uid);
  const token = jwt.sign({ uid }, ticketSecret);
  console.log(token);
  QRCode.toCanvas(canvas, token, function cb(err) {
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`./server/tempImages/qr-${uid}.png`, buffer);
  });
};
module.exports = makeQROnFly;
