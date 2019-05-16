const mongoose = require('mongoose');

mongoose.connect();

let houseSchema = mongoose.Schema({
  house_id: Number,
  pictures: [{ description: String, url: String, isVerified: Boolean }],
});
