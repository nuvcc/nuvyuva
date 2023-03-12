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

// Calling function and utils
const sendEmail = require('../server/utils/sendEmail');

// Express server use configs
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Calling router here
const router = require('./routes/index');
app.use('/', router);

// Serve static files from the build folder
// Route all requests to the React app
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
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
    const [email, phone, amount, transactionid, status, productinfo] = [
      output.email,
      output.phone,
      output.amount,
      output.mihpayid,
      output.status,
      output.productinfo,
    ];
    let name = output.field4;

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
    console.log();
    if ((name == '') | (name == null) | (name == undefined)) {
      console.log('name is null, setting to its email');
      name = email;
    }
    console.log(email, name, phone, amount, transactionid, status, eventName);

    // await makeQROnFly(transactionid, name, email, amount);
    await getQROnTicket(transactionid);
    let emailStatus = false;

    const user = await userModel.findById({ _id: transactionid });
    console.log('user:', user);
    if (user) {
      if (user.paymentStatus == 'success') {
        return res.status(409).json({ message: 'A similar user exists! 🔴 ' });
      } else if (user.paymentStatus != 'success') {
        console.log('Payment failed but now trying to update!');
      }
    } else {
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
        return res.json({
          message: 'Some error occurred while adding a new user! 🔴 ',
        });
      }
    }

    if (status === 'success') {
      await sendEmail(req, res, transactionid, eventName);
    } else {
      return res.json({
        message: 'Payment failed or pending 🔴',
        success: false,
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
