const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true }
});

userSchema.plugin(passportLocalMongoose); // ✅ Adds 'username' and authentication methods

module.exports = mongoose.model("User", userSchema);
