const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/house');

let houseSchema = new mongoose.Schema({
  house_id: Number,
  pictures: [{ description: String, url: String, isVerified: Boolean }]
});

let House = mongoose.model('House', houseSchema); 

for (var i = 101; i < 201; i++) {

  let house1 = new House({
    house_id: i,
    pictures: []
  })
  
  let randomNumBetweenRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumOfPics = randomNumBetweenRange(8, 12);
  
  for (var j = 0; j < randomNumOfPics; j++) {
  
    let randomUrlPath = Math.floor(Math.random() * 51);
    
    let picture1 = {};
    picture1['description'] = faker.random.words();
    picture1['url'] = `https://s3-us-west-1.amazonaws.com/bnbpictures/pic${randomUrlPath}.jpeg`;
    picture1['isVerified'] = faker.random.boolean();
  
    house1.pictures.push(picture1);
  } 
  
  house1.save((err, house) => {
    if (err) return console.log(err);
    console.log('successfully saved into db')
  })

}

