const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://172.17.0.2/house', { useMongoClient: true });

const houseSchema = new mongoose.Schema({
  house_id: Number,
  pictures: [{ description: String, url: String, isVerified: Boolean }],
});

const House = mongoose.model('House', houseSchema);

module.exports = { db, House };
