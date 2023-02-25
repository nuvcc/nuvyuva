const express = require('express');
const path = require('path');
const cors = require("cors");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: `./config.env` });
var nodeoutlook = require('nodejs-nodemailer-outlook');
require("./db/conn");
const userModel = require("./models/user.model");

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

app.post("/pay", async (req, res) => {
  try {
      const output = await (req.body);
      const userEmail = output.email;
      const userPhone = output.phone;
      const status = output.status;
      const eventAmt = output.amount;
      const productinfo = output.productinfo;
      const transactionid = output.mihpayid;
      const emailStatus = false;
      const eventName = "Demo";


      console.log(output);

      const user = await userModel.findOne({ transactionid });
      if (user) {
          return res.status(409).json({ message: "A similar user exists! 🔴 " });
      }
      const newUser = await userModel.create({
          userEmail,
          userPhone,
          eventName,
          eventAmt,
          transactionid,
          emailStatus
      });
      if (!newUser) {
          res.json({
              message: "Some error occurred while adding a new user! 🔴 ",
          });
      }

      if (status === "success") {
          const templateInput = `Payment ${status}`

          nodeoutlook.sendEmail({
              auth: {
                  user: process.env.user,
                  pass: process.env.pass,
              },
              from: process.env.user,
              to: userEmail,
              subject: 'Test Mail',
              html: templateInput,
              text: templateInput,
              replyTo: process.env.user,

              onError: (e) => console.log(e),
              onSuccess: async (i) => {
                  console.log(i);
                  try {
                      const updateUser = await userModel.findOneAndUpdate({ transactionid }, { $set: { "emailStatus": true } })
                      return res.json({ message: "Email send to the user!!! 🟢" })
                  } catch (error) {
                      return res
                          .status(401)
                          .json({ message: "Some error occurred while updating the user! 🔴" });
                  }
              },
          });

      }
  } catch (error) {
      console.log(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
