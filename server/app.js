const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const getQROnTicket = require('../server/functions/tickets');
// require('./functions/spaces/index.js');
const app = express();
const nodeoutlook = require('nodejs-nodemailer-outlook');

// Database includes
require('./db/conn');
const userModel = require('./models/user.model');

// env loading
const { email, pass } = require('../server/utils');
const senderEmail = email;
const senderPassword = pass;
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/random', (req, res) => {
  return res.status(200).json({
    message: 'Random!',
    success: 'The URL sent!',
  });
});

const {
  getId,
  postTickets,
  buyTicket,
} = require('../server/controllers/concert.controller');
const {
  postProfile,
  getAllProfiles,
} = require('./controllers/profile.controller');

app.post('/profile', postProfile);
app.get('/getAllProfiles', getAllProfiles);
app.post('/buyTicket', buyTicket);

app.get('/getIdTruthy', getId);
app.post('/postTickets', postTickets);
// Serve static files from the build folder
app.use(express.static(path.join(__dirname, '../build')));

// Route all requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// getting details from the portal and looking!
app.post('/pay', async (req, res) => {
  const output = await req.body;
  console.log(output);
  res.status(200).json({
    message: 'works like a charm!',
  });
});

// Getting post callback after payment!
app.post('/callback', async (req, res) => {
  console.log('callback from the paynow portal');
  const output = await req.body;
  console.log(output);
  // await getQROnTicket(output.mihpayid);
  res.status(200).json({
    message: 'works like a charm!',
  });
});

// Controller for makingQR and sending emails!
app.post('/pay1', async (req, res) => {
  try {
    const output = await req.body;
    console.log(output);
    const [email, name, phone, amount, transactionid, status, productinfo] = [
      output.email,
      output.field4,
      output.phone,
      output.amount,
      output.mihpayid,
      output.status,
      output.productinfo,
    ];

    const buttonPart = productinfo.split(' ');
    const buttonId = buttonPart[3].trim();

    const eventDetail = {
      24334060: 'Cricket',
      24334256: 'BGMI_Mobile',
      24334238: 'Valorant',
      24334221: 'COD_Mobile',
      24334194: 'Model United Nation',
      24334173: 'Volleyball',
      24334162: 'Football',
      24334138: 'Table Tennis',
      24334114: 'Carrom',
      24334091: 'Chess',
      24334078: 'Basketball',
      24334035: 'The_Camera_Geek',
      24333957: 'Rangoli',
      24333897: 'Treasure_Hunt',
      24333875: 'Ek_Se_Bhale_Teen',
      24333847: 'Painting_Competition',
      24333828: 'Band_Show',
      24333489: 'Danceing_Competition',
      24333575: 'Singing_Competition',
      24333583: 'Stand_Up_Beat_Boxing',
      24333598: 'Fashion_Show',
    };

    console.log(`buttonid:${buttonId}`);
    const eventName = eventDetail[buttonId];
    console.log(email, phone, amount, transactionid, status, eventName);

    // await makeQROnFly(transactionid, name, email, amount);
    await getQROnTicket(transactionid);
    let emailStatus = false;

    const user = await userModel.findOne({ transactionid });
    if (user) {
      return res.status(409).json({ message: 'A similar user exists! 🔴 ' });
    }
    const newUser = await userModel.create({
      _id: transactionid,
      email,
      name,
      phone,
      eventName,
      amount,
      paymentStatus: status,
      emailStatus,
    });
    if (!newUser) {
      res.json({
        message: 'Some error occurred while adding a new user! 🔴 ',
      });
    }

    if (status === 'success') {
      // const templateInput = `Payment ${status}`;
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
        to: email,
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
              transactionid,
              {
                $set: { emailStatus: true },
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
    }
  } catch (error) {
    console.log(error);
  }
  // return res.status(200).json({ message: 'This is working!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
