const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const makeQROnFly = require('../makeQr');
const canvas = createCanvas(4172, 1550);
const ctx = canvas.getContext('2d');

const getQROnTicket = async (uid) => {
  loadImage('images/ticket_v3.png').then(async (image) => {
    //   ctx.drawImage(image, 50, 0, 70, 70);
    ctx.drawImage(image, 0, 0, 4172, 1550);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`./server/tempImages/qr-${uid}.png`, buffer);
    await makeQROnFly(uid);
    loadImage(`./server/tempImages/qr-${uid}.png`).then((image) => {
      ctx.drawImage(image, 3100, 560, 800, 800);
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(`./server/finalTickets/${uid}.png`, buffer);
    });
    console.log(`Ticket Created for ${uid}`);
  });
};

module.exports = getQROnTicket;
