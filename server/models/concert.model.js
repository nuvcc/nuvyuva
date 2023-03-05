const mongoose = require('mongoose');

const concertTicketSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    default: 'tejgandhi2013@gmail.com',
  },
  phone: {
    type: String,
    required: true,
    default: '8347613157',
  },
  name: {
    type: String,
    required: true,
  },
  ticketType: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
    default: 1000,
  },
  universityName: {
    type: String,
    required: true,
    default: 'Navrachana University',
  },
  bookedStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
  paymentStatus: {
    type: String,
    required: true,
    default: false,
  },
  emailStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const concertTicketModel = new mongoose.model(
  'concert-tickets',
  concertTicketSchema
);

module.exports = concertTicketModel;
