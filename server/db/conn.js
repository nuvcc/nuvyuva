const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB = process.env.DATABASE;

mongoose.set('strictQuery', false);
mongoose
  .connect(DB, { useNewUrlParser: true, UseUnifiedTopology: true })
  .then((DB) => {
    // console.log(DB);
    console.log(`Connected to MongoDB Database: ${DB.connections[0].name}`);
  })
  .catch((err) => {
    console.log(err);
  });
