const express = require('express');
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const makeQROnFly = require('./makeQr');

const app = express();
const nodeoutlook = require('nodejs-nodemailer-outlook');
require('./db/conn');
const userModel = require('./models/user.model');

const senderEmail = process.env.email;
const senderPassword = process.env.pass;

const PORT = process.env.PORT || 80;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the build folder
app.use(express.static(path.join(__dirname, '../build')));

// Route all requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/random', (req, res) => {
  return res.status(200).json({
    message: 'Random!',
    success: 'The URL sent!',
  });
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
      output.name,
      output.phone,
      output.amount,
      output.mihpayid,
      output.status,
      output.productinfo
    ];

    const buttonId = productinfo.split(" ");

    const eventDetail = {
      "24334060": "Cricket",
      "24334256": "BGMI_Mobile",
      "24334238": "Valorant",
      "24334221": "COD_Mobile",
      "24334194": "Model United Nation",
      "24334173": "Volleyball",
      "24334162": "Football",
      "24334138": "Table Tennis",
      "24334114": "Carrom",
      "24334091": "Chess",
      "24334078": "Basketball",
      "24334035": "The_Camera_Geek",
      "24333957": "Rangoli",
      "24333897": "Treasure_Hunt",
      "24333875": "Ek_Se_Bhale_Teen",
      "24333847": "Painting_Competition",
      "24333828": "Band_Show",
      "24333489": "Danceing_Competition",
      "24333575": "Singing_Competition",
      "24333583": "Stand_Up_Beat_Boxing",
      "24333598": "Fashion_Show"
    };

    const eventName = eventDetail[buttonId[3]];

    await makeQROnFly(transactionid, name, email, amount);
    let emailStatus = false;
    console.log(email, phone, amount, transactionid, status);

    const user = await userModel.findOne({ transactionid });
    if (user) {
      return res.status(409).json({ message: 'A similar user exists! 🔴 ' });
    }
    const newUser = await userModel.create({
      _id: transactionid,
      email,
      name,
      phone,
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
      const templateInput = `Payment ${status}`;
      console.log('sending email...');
      nodeoutlook.sendEmail({
        auth: {
          user: senderEmail,
          pass: senderPassword,
        },
        from: senderEmail,
        to: email,
        subject: '✨ Registration Ticket Here!',
        html: templateInput,
        text: templateInput,
        replyTo: senderEmail,
        attachments: [
          {
            fileName: 'ticket.png',
            path: `./server/tempImages/qr-${transactionid}.png`,
          },
        ],

        onError: (e) => console.log(e),
        onSuccess: async (i) => {
          console.log(i);
          try {
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
  //   return res.status(200).json({ message: 'This is working!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
