const QRCode = require('qrcode');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const { ticketSecret } = require('../../utils');

const { createCanvas } = require('canvas');
const canvas = createCanvas(4172, 1550);

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
