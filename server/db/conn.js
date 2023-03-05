const mongoose = require('mongoose');

const { DB } = require('../utils/index');

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
