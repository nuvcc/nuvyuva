const mongoose = require('mongoose');

const concertTicketSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
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
    default: 'Tej Gandhi',
  },
  ticketType: {
    type: String,
    required: true,
    default: 'Regular',
  },
  amount: {
    type: String,
    required: true,
    default: 500,
  },
  universityName: {
    type: String,
    required: true,
    default: 'Navrachana University',
  },
  getProfile: {
    type: String,
    required: true,
    default: 'Online Website',
  },
  bookedStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
  paymentStatus: {
    type: String,
    default: 'failed',
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
