const concertTicketModel = require('../models/concert.model');
const QRCode = require('qrcode');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { ticketSecret } = require('../utils');

const { createCanvas } = require('canvas');
const canvas = createCanvas(4172, 1550);

const logicForTickets = async () => {
  // const token = jwt.sign({ uid }, ticketSecret);
  // console.log(token);
  let code = {
    id: 'asd',
    hash: 'asd',
  };
  code = JSON.stringify(code);
  console.log(code);
  QRCode.toCanvas(canvas, code, function cb(err) {
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(
      `./server/functions/spaces/images/qr-${code.id}.png`,
      buffer
    );
  });
  const url = '123';
  return url;
};

const concertTicketsUploadTickets = async () => {
  console.log('logger!');
};

module.exports = concertTicketsUploadTickets;
// logicForTickets();
