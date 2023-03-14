const nodeoutlook = require('nodejs-nodemailer-outlook');
const userModel = require('../models/user.model');
const { email, pass } = require('./index');
const senderEmail = email;
const senderPassword = pass;

const sendEmail = async (req, res, transactionid, eventName, clientEmail) => {
  const newtemplateInput = `<p>Hey there!</p>

    <p><br />
    Thank you for your registration in ${eventName} for NUVYUVA'23!</p>

    <p><br />We look forward to seeing you for the event! The detailed schedule and guidelines will be shared shortly. Stay connected to our social media for regular updates! </p>

    <p><br />P.s Please carry along the attached ticket on the day of the event. </p>
    <p><br />Thank you again, and have a great day.</p>`;
  console.log('sending email...');
  nodeoutlook.sendEmail({
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
    from: senderEmail,
    to: clientEmail,
    subject: '✨ Registration Ticket Here!',
    html: newtemplateInput,
    text: newtemplateInput,
    replyTo: senderEmail,
    attachments: [
      {
        fileName: 'ticket.png',
        path: `./server/finalTickets/${transactionid}.png`,
      },
    ],

    onError: (e) => console.log(e),
    onSuccess: async (i) => {
      try {
        console.log('sent ✅');
        const updateUser = await userModel.findByIdAndUpdate(
          { _id: transactionid },
          {
            $set: { emailStatus: true, paymentStatus: 'success' },
          },
          {
            new: true,
          }
        );
        return res.json({
          message: 'Email send to the user!!! 🟢',
          user: updateUser,
          success: true,
        });
      } catch (error) {
        return res.status(401).json({
          message: 'Some error occurred while updating the user! 🔴',
          err: error,
        });
      }
    },
  });
};

module.exports = sendEmail;
