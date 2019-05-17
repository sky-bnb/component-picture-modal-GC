/* eslint-disable no-plusplus */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/house');

const houseSchema = new mongoose.Schema({
  house_id: Number,
  pictures: [{ description: String, url: String, isVerified: Boolean }],
});

const House = mongoose.model('House', houseSchema);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log('Db connected');


  const promise = [];

  for (let i = 101; i < 201; i++) {
    const house = new House({
      house_id: i,
      pictures: [],
    });

    const randomNumBetweenRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumOfPics = randomNumBetweenRange(10, 50);

    for (let j = 0; j < randomNumOfPics; j++) {
      const randomUrlPath = Math.floor(Math.random() * 51);

      const picture = {};
      picture.description = faker.random.words();
      picture.url = `https://s3-us-west-1.amazonaws.com/bnbpictures/pic${randomUrlPath}.jpeg`;
      picture.isVerified = faker.random.boolean();

      house.pictures.push(picture);
    }
    promise.push(house);

    house.save();
  }

  Promise.all(promise)
    .then(() => {
      mongoose.connection.close();
      console.log('Connection closed');
    })
    .catch(err => console.log(err));
});

module.exports = House; 

