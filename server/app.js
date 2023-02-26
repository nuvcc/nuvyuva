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
    const [email, name, phone, amount, transactionid, status] = [
      output.email,
      output.name,
      output.phone,
      output.amount,
      output.mihpayid,
      output.status,
    ];
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
