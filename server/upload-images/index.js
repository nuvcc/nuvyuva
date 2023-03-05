const concertTicketModel = require('../models/concert.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const QRCode = require('qrcode');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { ticketSecret } = require('../utils');

const { createCanvas } = require('canvas');
const canvas = createCanvas(4172, 1550);

const logicForTickets = async () => {
  const text = 'Nimit2801';
  const hash = bcrypt.hashSync(text, saltRounds);
  const uid = '123';
  // const token = jwt.sign({ uid }, ticketSecret);
  // console.log(token);
  // QRCode.toCanvas(canvas, token, function cb(err) {
  //   const buffer = canvas.toBuffer('image/png');
  //   fs.writeFileSync(`./server/tempImages/qr-${uid}.png`, buffer);
  // });
  // console.log(hash);
  const url = '123';
  return url;
};

const concertTicketsUploadTickets = async () => {
  console.log('logger!');
};

module.exports = concertTicketsUploadTickets;
logicForTickets();
