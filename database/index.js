const mongoose = require('mongoose');
const urls = require('./data_url.js');
const faker = require('faker');

mongoose.connect('mongodb://localhost/house');

let houseSchema = new mongoose.Schema({
  house_id: Number,
  pictures: [{ description: String, url: String, isVerified: Boolean }]
});

let House = mongoose.model('House', houseSchema); 

let house1 = new House({
  house_id: 101,
  pictures: [{
    descriptions: faker.lorem.sentence,
    url: urls[0],
    isVerified: faker.Boolean
  }]
})

house1.save((err, house) => {
  if (err) return console.log(err);
  console.log('successfully saved into db')
})
