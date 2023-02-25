const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    eventAmt: {
        type: String,
        required: true
    },
    transactionid: {
        type: String,
        required: true
    },
    emailStatus: {
        type: Boolean,
        required: true
    }
});

const userModel = new mongoose.model("USERS", userSchema);

module.exports = userModel;