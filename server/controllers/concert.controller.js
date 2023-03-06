const concertTicketModel = require('../models/concert.model');

const fun = async (id) => {
  console.log('id: ', id);
  const newTicket = await concertTicketModel.create({
    _id: id,
    imageURL: 'random.com',
    email: 'random@adasd',
    phone: '1234567890',
    name: 'random',
    ticketType: 'Earky Bird',
    amount: 500,
    universityName: 'MSU',
    bookedStatus: false,
    paymentStatus: 'yet to book',
    emailStatus: false,
  });
  console.log(newTicket._id, ' was created!');
};
const postTickets = async (req, res) => {
  console.log('was here!');
  for (let i = 1; i <= 1000; i++) {
    let id;
    if (i < 10) id = '000' + i;
    if (i > 9) id = '00' + i;
    if (i > 99) id = '0' + i;
    if (i === 1000) id = i;
    await fun(id);
  }
  return res.status(200).json({ message: 'The clients was created!' });
};

const getId = async (req, res) => {
  const results = req.query;
  console.log(results.id);
  const ticket = await concertTicketModel.findOne({ _id: results.id });
  console.log(ticket.bookedStatus);
  if (!ticket.bookedStatus)
    return res
      .status(200)
      .json({ message: 'This ticket can be booked!', canBeBooked: true });
  else
    return res
      .status(200)
      .json({ message: 'This ticket cannot be booked!', canBeBooked: false });
};

module.exports = getId;
