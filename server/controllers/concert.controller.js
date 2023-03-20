const concertTicketModel = require('../models/concert.model');
const { email, pass } = require('../utils');
const senderEmail = email;
const senderPassword = pass;
const nodeoutlook = require('nodejs-nodemailer-outlook');

const fun = async (id, ticketType, amount) => {
  console.log('id: ', id);
  const newTicket = await concertTicketModel.create({
    _id: id,
    email: 'tejgandhi2013@gmail.com',
    phone: '8347613157',
    name: 'Tej Gandhi',
    ticketType,
    amount,
    universityName: 'NUV',
    bookedStatus: false,
    paymentStatus: 'yet to book',
    emailStatus: false,
  });
  console.log(newTicket._id, ' was created!');
};
const postTickets = async (req, res) => {
  console.log('was here!');
  const eb = {
    ticketType: 'Early Bird',
    amount: 500,
  };
  const vip = {
    ticketType: 'VIP',
    amount: 1000,
  };
  const fp = {
    ticketType: 'Fan Pit',
    amount: 1700,
  };
  const reg = {
    ticketType: 'Regular',
    amount: 2000,
  };

  let ticketMeta = {
    ticketType: '',
    amount: 0,
  };

  for (let i = 1; i <= 3100; i++) {
    let id;
    if (i < 10) {
      id = '000' + i;
      ticketMeta = eb;
    } else if (i > 9) {
      id = '00' + i;
      ticketMeta = eb;
    } else if (i > 99 && i < 501) {
      id = '0' + i;
      ticketMeta = eb;
    } else if (i > 500 && i < 1000) {
      id = '0' + i;
      ticketMeta = vip;
    } else if (i >= 1000 && i <= 1100) {
      id = i;
      if (i === 1000) {
        ticketMeta = vip;
      } else {
        ticketMeta = fp;
      }
    } else if (i > 1100 && i <= 3100) {
      id = i;
      ticketMeta = reg;
    }
    await fun(id, ticketMeta.ticketType, ticketMeta.amount);
  }
  return res.status(200).json({ message: 'The ticket were created!' });
};

const buyTicket = async (req, res) => {
  const [id, name, email, phone, universityName, getProfile] = [
    req.body.id,
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.universityName,
    req.body.getProfile,
  ];
  console.log(id, name, email, phone, universityName, getProfile);
  try {
    if (!id) {
      return res
        .status(400)
        .json({ message: 'The id was not found in the request!' });
    } else if (id) {
      try {
        const ticket = await concertTicketModel.findById(id);
        if (ticket.bookedStatus === true) {
          return res
            .status(400)
            .json({ message: 'This ticket was already booked!' });
        }
      } catch (error) {
        return res.status(400).json({ message: 'This ticket does not exist!' });
      }
    }
    const ticket = await concertTicketModel.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
        phone: phone,
        universityName: universityName,
        getProfile: getProfile,
        bookedStatus: true,
        emailStatus: false,
        paymentStatus: 'success',
      },
      { new: true }
    );
    console.log(ticket);

    if (ticket.paymentStatus === 'success') {
      // const templateInput = `Payment ${status}`;
      const newtemplateInput = `<p>The ticket was booked!</p>`;
      console.log('sending email...');
      await nodeoutlook.sendEmail({
        auth: {
          user: senderEmail,
          pass: senderPassword,
        },
        from: senderEmail,
        to: email,
        subject: '✨ Registration Ticket Here!',
        html: newtemplateInput,
        text: newtemplateInput,
        replyTo: senderEmail,

        onError: async (e) => {
          console.log(e);
          if (!ticket.bookedStatus) {
            return res
              .status(400)
              .json({ message: "This ticket can't be booked!" });
          } else {
            return res.status(200).json({
              message: 'This ticket can be booked! Without email!',
              ticket,
            });
          }
        },
        onSuccess: async (i) => {
          try {
            console.log('sent ✅');
            const updateTicket = await concertTicketModel.findByIdAndUpdate(
              id,
              {
                $set: { emailStatus: true },
              },
              { new: true }
            );
            return res.status(200).json({
              message: 'This ticket can be booked with email!',
              updateTicket,
            });
          } catch (error) {
            return res.status(401).json({
              message: 'Some error occurred while updating the user! 🔴',
              err: error,
            });
          }
        },
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "This ticket can't be booked!", error: `${err}` });
  }
};

const getId = async (req, res) => {
  const results = req.query;
  console.log(results.id);
  const ticket = await concertTicketModel.findOne({ _id: results.id });
  console.log(ticket.bookedStatus);
  if (!ticket.bookedStatus)
    return res.status(200).json({
      message: 'This ticket can be booked!',
      canBeBooked: true,
      ticketType: ticket.ticketType,
    });
  else
    return res
      .status(200)
      .json({ message: 'This ticket cannot be booked!', canBeBooked: false });
};

exports.getId = getId;
exports.postTickets = postTickets;
exports.buyTicket = buyTicket;
